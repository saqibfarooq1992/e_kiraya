(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/AdminDashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/AdminDashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin_service */ "./resources/js/services/admin_service.js");
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/properties_service */ "./resources/js/services/properties_service.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user_service */ "./resources/js/services/user_service.js");
/* harmony import */ var _services_admin_new_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/admin_new_service */ "./resources/js/services/admin_new_service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");
/* harmony import */ var _services_landloard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/landloard_service */ "./resources/js/services/landloard_service.js");
/* harmony import */ var _services_reserved_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/reserved_service */ "./resources/js/services/reserved_service.js");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Admin-Dashboard",
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_8__["VueEditor"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      searchQuery: null,
      //  admin property
      loading: true,
      properties: [],
      moreExistsEngaged: false,
      profile: this.$store.state.profile,
      visitors: [],
      password: {
        current_password: '',
        new_password: '',
        new_password_confirmation: ''
      },
      users: [],
      invoices: [],
      invoiceQuery: '',
      loadMoreInvoice: false,
      pendings: [],
      approveds: [],
      sectors: [],
      totals: [],
      totalPenddingRent: [],
      favourits: [],
      reacted: [],
      managers: [],
      editPropertyData: {},
      // add Staff
      userQuery: "",
      reactQuery: "",
      q: ""
    }, _defineProperty(_ref, "users", []), _defineProperty(_ref, "cities", []), _defineProperty(_ref, "editManagerData", {}), _defineProperty(_ref, "user", {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      phone: "",
      role: "",
      city_id: "",
      avatar: ''
    }), _defineProperty(_ref, "moreExistsLandlord", false), _defineProperty(_ref, "moreExistsReserved", false), _defineProperty(_ref, "nextPage", 0), _defineProperty(_ref, "errors", {}), _defineProperty(_ref, "employees", []), _defineProperty(_ref, "emps", []), _defineProperty(_ref, "reacts", []), _defineProperty(_ref, "cities", []), _defineProperty(_ref, "editAreaEmployeeData", {}), _defineProperty(_ref, "moreExistsProperties", false), _defineProperty(_ref, "moreExistsFavourits", false), _defineProperty(_ref, "nextPage", 0), _defineProperty(_ref, "errors", {}), _defineProperty(_ref, "cities", []), _defineProperty(_ref, "employee", {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      phone: "",
      city_id: "",
      avatar: ''
    }), _defineProperty(_ref, "moreExistsStaff", false), _defineProperty(_ref, "nextPage", 0), _defineProperty(_ref, "errors", {}), _defineProperty(_ref, "cities", []), _defineProperty(_ref, "EmployeeData", {
      name: '',
      city: '',
      sector: ''
    }), _defineProperty(_ref, "moreExists", false), _defineProperty(_ref, "nextPage", 0), _defineProperty(_ref, "city", 0), _defineProperty(_ref, "sector", 0), _defineProperty(_ref, "errors", {}), _defineProperty(_ref, "reserveds", []), _defineProperty(_ref, "engaged", []), _defineProperty(_ref, "landlords", []), _defineProperty(_ref, "engageCount", []), _defineProperty(_ref, "query", ""), _defineProperty(_ref, "moreExists", false), _defineProperty(_ref, "nextPage", 0), _defineProperty(_ref, "errors", {}), _defineProperty(_ref, "favourits", []), _defineProperty(_ref, "cities", []), _defineProperty(_ref, "editEmployeeData", {}), _defineProperty(_ref, "protypes", []), _defineProperty(_ref, "nextPage", 0), _defineProperty(_ref, "errors", {}), _defineProperty(_ref, "manag", {
      user_id: '',
      property_id: '',
      comment: ''
    }), _defineProperty(_ref, "paidRent", ""), _defineProperty(_ref, "rents", ""), _defineProperty(_ref, "managers", []), _defineProperty(_ref, "pendingRent", ""), _defineProperty(_ref, "areaManagers", {}), _defineProperty(_ref, "managerData", {
      name: '',
      city: '',
      sector: ''
    }), _ref;
  },
  computed: {
    resultQuery: function resultQuery() {
      var _this = this;

      if (this.searchQuery) {
        alert(this.searchQuery);
        return this.properties.filter(function (property) {
          return _this.searchQuery.toLowerCase().split(' ').every(function (v) {
            return property.user.name.toLowerCase().includes(v);
          });
        });
      } else {
        return this.properties;
      }
    }
  },
  mounted: function mounted() {
    this.getProperty();
    this.getProperties();
    this.getTotalPropertyCount();
    this.getProTypeData();
    this.getTotalRentCount();
    this.getUser();
    this.getCity();
    this.getManager();
    this.getAreaManaer();
    this.getAreaEmployee();
    this.getEmployee();
    this.getPendingRent();
    this.getPaidRent();
    this.getTotalRentProperty();
    this.getReservedProperty();
    this.getFavourit();
  },
  methods: (_methods = {
    getFavourit: function () {
      var _getFavourit = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["getFavourit"]();

              case 3:
                response = _context.sent;
                this.favourits = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

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

      function getFavourit() {
        return _getFavourit.apply(this, arguments);
      }

      return getFavourit;
    }(),
    updateProfile: function () {
      var _updateProfile = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                formData = new FormData();
                formData.append('name', this.profile.name);
                formData.append('phone', this.profile.phone);
                formData.append('avater', this.profile.avatar);
                formData.append('cities', this.profile.cities);
                formData.append('_method', 'put');
                _context2.next = 9;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["updateProfile"](formData);

              case 9:
                response = _context2.sent;
                this.errors = {};
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                _context2.next = 27;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](0);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 19 : _context2.t1 === 401 ? 21 : 24;
                break;

              case 19:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 27);

              case 21:
                this.errors = {};
                this.flashMessage.error({
                  message: _context2.t0.response.data.message,
                  time: 5000
                });
                return _context2.abrupt("break", 27);

              case 24:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context2.abrupt("break", 27);

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 14]]);
      }));

      function updateProfile() {
        return _updateProfile.apply(this, arguments);
      }

      return updateProfile;
    }(),
    updateImage: function () {
      var _updateImage = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                formData = new FormData();
                formData.append('avater', this.profile.avatar);
                formData.append('_method', 'put');
                _context3.next = 6;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["updateImage"](formData);

              case 6:
                response = _context3.sent;
                this.errors = {};
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                _context3.next = 24;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 16 : _context3.t1 === 401 ? 18 : 21;
                break;

              case 16:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 24);

              case 18:
                this.errors = {};
                this.flashMessage.error({
                  message: _context3.t0.response.data.message,
                  time: 5000
                });
                return _context3.abrupt("break", 24);

              case 21:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context3.abrupt("break", 24);

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 11]]);
      }));

      function updateImage() {
        return _updateImage.apply(this, arguments);
      }

      return updateImage;
    }(),
    changePassword: function () {
      var _changePassword = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["changePassword"](this.password);

              case 3:
                response = _context4.sent;
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
                _context4.next = 22;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                _context4.t1 = _context4.t0.response.status;
                _context4.next = _context4.t1 === 422 ? 14 : _context4.t1 === 401 ? 16 : 19;
                break;

              case 14:
                this.errors = _context4.t0.response.data.errors;
                return _context4.abrupt("break", 22);

              case 16:
                this.errors = {};
                this.flashMessage.info({
                  message: _context4.t0.response.data.message,
                  time: 5000
                });
                return _context4.abrupt("break", 22);

              case 19:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context4.abrupt("break", 22);

              case 22:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 9]]);
      }));

      function changePassword() {
        return _changePassword.apply(this, arguments);
      }

      return changePassword;
    }(),
    editAttachImageProfile: function editAttachImageProfile() {
      this.profile.avatar = this.$refs.editAvatar.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.editAvatarDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.profile.avatar);
    },
    smartinvoice: function smartinvoice() {
      var printContents = document.getElementById('smartinvoice').innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    },
    getProperty: function () {
      var _getProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["getProperty"]();

              case 3:
                response = _context5.sent;
                this.properties = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsProperties = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsProperties = false;
                }

                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function getProperty() {
        return _getProperty.apply(this, arguments);
      }

      return getProperty;
    }(),
    getProperties: function () {
      var _getProperties = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["getProperties"]();

              case 3:
                response = _context6.sent;
                this.engaged = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsEngaged = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsEngaged = false;
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

      function getProperties() {
        return _getProperties.apply(this, arguments);
      }

      return getProperties;
    }(),
    loadProperties: function () {
      var _loadProperties = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var _this2 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["loadProperties"](this.nextPage);

              case 3:
                response = _context7.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsEngaged = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsEngaged = false;
                }

                response.data.data.forEach(function (data) {
                  _this2.engaged.push(data);
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

      function loadProperties() {
        return _loadProperties.apply(this, arguments);
      }

      return loadProperties;
    }(),
    getReservedProperty: function () {
      var _getReservedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["getReservedProperty"]();

              case 3:
                response = _context8.sent;
                this.reserveds = response.data.data; // if (response.data.current_page < response.data.last_page) {
                // this.moreExists = true;
                // this.nextPage = response.data.current_page + 1;
                // } else {
                // this.moreExists = false;
                // }

                _context8.next = 10;
                break;

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 7]]);
      }));

      function getReservedProperty() {
        return _getReservedProperty.apply(this, arguments);
      }

      return getReservedProperty;
    }(),
    searchProperty: function () {
      var _searchProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var q, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                q = {
                  q: this.q
                };
                _context9.next = 4;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["searchProperty"](q);

              case 4:
                response = _context9.sent;
                console.log(response);
                this.properties = response.data;
                _context9.next = 12;
                break;

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred",
                  time: 5000
                });

              case 12:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 9]]);
      }));

      function searchProperty() {
        return _searchProperty.apply(this, arguments);
      }

      return searchProperty;
    }(),
    updateProperty: function () {
      var _updateProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
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
                formData.append("operator", this.editPropertyData.operator);
                formData.append("security_price", this.editPropertyData.security_price);
                formData.append("company_commession", this.editPropertyData.company_commession);
                formData.append("paid_date", this.editPropertyData.paid_date);
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
                _context10.next = 36;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["updateProperty"](this.editPropertyData.id, formData);

              case 36:
                response = _context10.sent;
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
                _context10.next = 51;
                break;

              case 42:
                _context10.prev = 42;
                _context10.t0 = _context10["catch"](0);
                _context10.t1 = _context10.t0.response.status;
                _context10.next = _context10.t1 === 422 ? 47 : 49;
                break;

              case 47:
                this.errors = _context10.t0.response.data.errors;
                return _context10.abrupt("break", 51);

              case 49:
                this.flashMessage.error({
                  message: "Some error occured !",
                  time: 500
                });
                return _context10.abrupt("break", 51);

              case 51:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0, 42]]);
      }));

      function updateProperty() {
        return _updateProperty.apply(this, arguments);
      }

      return updateProperty;
    }(),
    editProperty: function () {
      var _editProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(property) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.editPropertyData = _objectSpread({}, property);
                this.$refs.editProperty.show();

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function editProperty(_x) {
        return _editProperty.apply(this, arguments);
      }

      return editProperty;
    }(),
    getProTypeData: function () {
      var _getProTypeData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["getProTypeData"]();

              case 3:
                response = _context12.sent;
                this.protypes = response.data;
                _context12.next = 10;
                break;

              case 7:
                _context12.prev = 7;
                _context12.t0 = _context12["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 10:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 7]]);
      }));

      function getProTypeData() {
        return _getProTypeData.apply(this, arguments);
      }

      return getProTypeData;
    }(),
    getCity: function () {
      var _getCity = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                _context13.next = 3;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["getCity"]();

              case 3:
                response = _context13.sent;
                this.cities = response.data;
                _context13.next = 10;
                break;

              case 7:
                _context13.prev = 7;
                _context13.t0 = _context13["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[0, 7]]);
      }));

      function getCity() {
        return _getCity.apply(this, arguments);
      }

      return getCity;
    }(),
    getSectors: function () {
      var _getSectors = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                _context14.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["getSectors"]({
                  params: {
                    city_id: this.editPropertyData.city_id
                  }
                }).then(function (response) {
                  this.sectors = response.data;
                }.bind(this));

              case 3:
                response = _context14.sent;
                _context14.next = 9;
                break;

              case 6:
                _context14.prev = 6;
                _context14.t0 = _context14["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 9:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[0, 6]]);
      }));

      function getSectors() {
        return _getSectors.apply(this, arguments);
      }

      return getSectors;
    }(),
    deleteProperty: function () {
      var _deleteProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(property) {
        var responce;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete this Property")) {
                  _context15.next = 2;
                  break;
                }

                return _context15.abrupt("return");

              case 2:
                _context15.prev = 2;
                _context15.next = 5;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["deleteProperty"](property.id);

              case 5:
                responce = _context15.sent;
                this.properties = this.properties.filter(function (obj) {
                  return obj.id != property.id;
                });
                this.flashMessage.success({
                  message: "Property deleted successfuly!",
                  time: 5000
                });
                _context15.next = 13;
                break;

              case 10:
                _context15.prev = 10;
                _context15.t0 = _context15["catch"](2);
                this.flashMessage.error({
                  message: "Some thing going wrong!",
                  time: 5000
                });

              case 13:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[2, 10]]);
      }));

      function deleteProperty(_x2) {
        return _deleteProperty.apply(this, arguments);
      }

      return deleteProperty;
    }(),
    searchUser: function () {
      var _searchUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
        var userQuery, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                userQuery = {
                  userQuery: this.userQuery
                };
                _context16.next = 4;
                return _services_user_service__WEBPACK_IMPORTED_MODULE_3__["searchUser"](userQuery);

              case 4:
                response = _context16.sent;
                this.users = response.data;
                _context16.next = 11;
                break;

              case 8:
                _context16.prev = 8;
                _context16.t0 = _context16["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred",
                  time: 5000
                });

              case 11:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[0, 8]]);
      }));

      function searchUser() {
        return _searchUser.apply(this, arguments);
      }

      return searchUser;
    }(),
    searchReact: function () {
      var _searchReact = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17() {
        var reactQuery, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.prev = 0;
                reactQuery = {
                  reactQuery: this.reactQuery
                };
                _context17.next = 4;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["searchReact"](reactQuery);

              case 4:
                response = _context17.sent;
                this.favourits = response.data.data;
                _context17.next = 11;
                break;

              case 8:
                _context17.prev = 8;
                _context17.t0 = _context17["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred",
                  time: 5000
                });

              case 11:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this, [[0, 8]]);
      }));

      function searchReact() {
        return _searchReact.apply(this, arguments);
      }

      return searchReact;
    }(),
    getUser: function () {
      var _getUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.prev = 0;
                _context18.next = 3;
                return _services_user_service__WEBPACK_IMPORTED_MODULE_3__["getUser"]();

              case 3:
                response = _context18.sent;
                this.users = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsStaff = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsStaff = false;
                }

                _context18.next = 11;
                break;

              case 8:
                _context18.prev = 8;
                _context18.t0 = _context18["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 11:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this, [[0, 8]]);
      }));

      function getUser() {
        return _getUser.apply(this, arguments);
      }

      return getUser;
    }(),
    loadUser: function () {
      var _loadUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
        var _this3 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.prev = 0;
                _context19.next = 3;
                return _services_user_service__WEBPACK_IMPORTED_MODULE_3__["loadUser"](this.nextPage);

              case 3:
                response = _context19.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsStaff = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsStaff = false;
                }

                response.data.data.forEach(function (data) {
                  _this3.users.push(data);
                });
                _context19.next = 11;
                break;

              case 8:
                _context19.prev = 8;
                _context19.t0 = _context19["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred during load more users",
                  time: 5000
                });

              case 11:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this, [[0, 8]]);
      }));

      function loadUser() {
        return _loadUser.apply(this, arguments);
      }

      return loadUser;
    }(),
    invoiceprint: function invoiceprint() {
      var printContents = document.getElementById('invoiceprint').innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    },
    paidPropertyRent: function () {
      var _paidPropertyRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20(engaged) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (window.confirm("Are you sure you want to paid rent of this Property")) {
                  _context20.next = 2;
                  break;
                }

                return _context20.abrupt("return");

              case 2:
                _context20.prev = 2;
                _context20.next = 5;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["paidPropertyRent"](engaged.id);

              case 5:
                response = _context20.sent;
                this.flashMessage.success({
                  message: "Rent Paid Successfuly!",
                  time: 5000
                });
                _context20.next = 12;
                break;

              case 9:
                _context20.prev = 9;
                _context20.t0 = _context20["catch"](2);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 12:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this, [[2, 9]]);
      }));

      function paidPropertyRent(_x3) {
        return _paidPropertyRent.apply(this, arguments);
      }

      return paidPropertyRent;
    }(),
    unPaidPropertyRent: function () {
      var _unPaidPropertyRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21(engaged) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (window.confirm("Are you sure you know that this Property Rent is not Paid yet")) {
                  _context21.next = 2;
                  break;
                }

                return _context21.abrupt("return");

              case 2:
                _context21.prev = 2;
                _context21.next = 5;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["unPaidPropertyRent"](engaged.id);

              case 5:
                response = _context21.sent;
                this.flashMessage.success({
                  message: 'Your Successfully Change this property Rent type',
                  time: 5000
                });
                _context21.next = 12;
                break;

              case 9:
                _context21.prev = 9;
                _context21.t0 = _context21["catch"](2);
                this.flashMessage.errors({
                  message: 'Some error occured!',
                  time: 5000
                });

              case 12:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[2, 9]]);
      }));

      function unPaidPropertyRent(_x4) {
        return _unPaidPropertyRent.apply(this, arguments);
      }

      return unPaidPropertyRent;
    }(),
    loadProperty: function () {
      var _loadProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22() {
        var _this4 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.prev = 0;
                _context22.next = 3;
                return _services_admin_new_service__WEBPACK_IMPORTED_MODULE_4__["loadProperty"](this.nextPage);

              case 3:
                response = _context22.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsProperties = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsProperties = false;
                }

                response.data.data.forEach(function (data) {
                  _this4.properties.push(data);
                });
                _context22.next = 11;
                break;

              case 8:
                _context22.prev = 8;
                _context22.t0 = _context22["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred during load more properties",
                  time: 5000
                });

              case 11:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this, [[0, 8]]);
      }));

      function loadProperty() {
        return _loadProperty.apply(this, arguments);
      }

      return loadProperty;
    }(),
    searchInvoiceQuery: function () {
      var _searchInvoiceQuery = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23() {
        var invoiceQuery, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.prev = 0;
                invoiceQuery = {
                  invoiceQuery: this.invoiceQuery
                };
                _context23.next = 4;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["searchInvoiceQuery"](invoiceQuery);

              case 4:
                response = _context23.sent;
                this.engaged = response.data;
                _context23.next = 11;
                break;

              case 8:
                _context23.prev = 8;
                _context23.t0 = _context23["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred",
                  time: 5000
                });

              case 11:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this, [[0, 8]]);
      }));

      function searchInvoiceQuery() {
        return _searchInvoiceQuery.apply(this, arguments);
      }

      return searchInvoiceQuery;
    }(),
    loadInvoiceProperty: function () {
      var _loadInvoiceProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24() {
        var _this5 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.prev = 0;
                _context24.next = 3;
                return _services_landloard_service__WEBPACK_IMPORTED_MODULE_6__["loadInvoiceProperty"](this.nextPage);

              case 3:
                response = _context24.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.loadMoreInvoice = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.loadMoreInvoice = false;
                }

                response.data.data.forEach(function (data) {
                  _this5.engaged.push(data);
                });
                _context24.next = 11;
                break;

              case 8:
                _context24.prev = 8;
                _context24.t0 = _context24["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred during load more properties",
                  time: 5000
                });

              case 11:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this, [[0, 8]]);
      }));

      function loadInvoiceProperty() {
        return _loadInvoiceProperty.apply(this, arguments);
      }

      return loadInvoiceProperty;
    }(),
    getPaidRent: function () {
      var _getPaidRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.prev = 0;
                _context25.next = 3;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["getPaidRent"]();

              case 3:
                response = _context25.sent;
                this.paidRent = response.data;
                _context25.next = 10;
                break;

              case 7:
                _context25.prev = 7;
                _context25.t0 = _context25["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this, [[0, 7]]);
      }));

      function getPaidRent() {
        return _getPaidRent.apply(this, arguments);
      }

      return getPaidRent;
    }(),
    getTotalRentProperty: function () {
      var _getTotalRentProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.prev = 0;
                _context26.next = 3;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["getTotalRentProperty"]();

              case 3:
                response = _context26.sent;
                this.rents = response.data;
                _context26.next = 10;
                break;

              case 7:
                _context26.prev = 7;
                _context26.t0 = _context26["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this, [[0, 7]]);
      }));

      function getTotalRentProperty() {
        return _getTotalRentProperty.apply(this, arguments);
      }

      return getTotalRentProperty;
    }(),
    getPendingRent: function () {
      var _getPendingRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee27() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.prev = 0;
                _context27.next = 3;
                return _services_landloard_service__WEBPACK_IMPORTED_MODULE_6__["getPendingRent"]();

              case 3:
                response = _context27.sent;
                this.pendingRent = response.data;
                _context27.next = 10;
                break;

              case 7:
                _context27.prev = 7;
                _context27.t0 = _context27["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this, [[0, 7]]);
      }));

      function getPendingRent() {
        return _getPendingRent.apply(this, arguments);
      }

      return getPendingRent;
    }(),
    getAreaManaer: function () {
      var _getAreaManaer = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee28() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.prev = 0;
                _context28.next = 3;
                return _services_admin_new_service__WEBPACK_IMPORTED_MODULE_4__["getAreaManaer"]();

              case 3:
                response = _context28.sent;
                console.log(response, "get Area manager");
                this.areaManagers = response.data;
                _context28.next = 11;
                break;

              case 8:
                _context28.prev = 8;
                _context28.t0 = _context28["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 11:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this, [[0, 8]]);
      }));

      function getAreaManaer() {
        return _getAreaManaer.apply(this, arguments);
      }

      return getAreaManaer;
    }(),
    createAreaManager: function () {
      var _createAreaManager = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee29() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.prev = 0;
                _context29.next = 3;
                return _services_admin_new_service__WEBPACK_IMPORTED_MODULE_4__["createAreaManager"](this.managerData);

              case 3:
                response = _context29.sent;
                this.managers.unshift(response.data);
                this.flashMessage.success({
                  message: 'Area Manager Successfully created',
                  time: 5000
                });
                _context29.next = 11;
                break;

              case 8:
                _context29.prev = 8;
                _context29.t0 = _context29["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred!',
                  time: 5000
                });

              case 11:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this, [[0, 8]]);
      }));

      function createAreaManager() {
        return _createAreaManager.apply(this, arguments);
      }

      return createAreaManager;
    }(),
    createAreaEmployee: function () {
      var _createAreaEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee30() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                _context30.prev = 0;
                _context30.next = 3;
                return _services_admin_new_service__WEBPACK_IMPORTED_MODULE_4__["createAreaEmployee"](this.EmployeeData);

              case 3:
                response = _context30.sent;
                this.employees.unshift(response.data);
                this.flashMessage.success({
                  message: 'Area Employee Successfully created',
                  time: 5000
                });
                this.getAreaEmployee();
                _context30.next = 12;
                break;

              case 9:
                _context30.prev = 9;
                _context30.t0 = _context30["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred!',
                  time: 5000
                });

              case 12:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this, [[0, 9]]);
      }));

      function createAreaEmployee() {
        return _createAreaEmployee.apply(this, arguments);
      }

      return createAreaEmployee;
    }(),
    getAreaEmployee: function () {
      var _getAreaEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee31() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _context31.prev = 0;
                _context31.next = 3;
                return _services_admin_new_service__WEBPACK_IMPORTED_MODULE_4__["getAreaEmployee"]();

              case 3:
                response = _context31.sent;
                this.employees = response.data;
                _context31.next = 10;
                break;

              case 7:
                _context31.prev = 7;
                _context31.t0 = _context31["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this, [[0, 7]]);
      }));

      function getAreaEmployee() {
        return _getAreaEmployee.apply(this, arguments);
      }

      return getAreaEmployee;
    }(),
    editAreaEmployee: function () {
      var _editAreaEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee32(employee) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                this.editAreaEmployeeData = _objectSpread({}, employee);
                this.$refs.editAreaEmployee.show();

              case 2:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function editAreaEmployee(_x5) {
        return _editAreaEmployee.apply(this, arguments);
      }

      return editAreaEmployee;
    }(),
    getEmployee: function () {
      var _getEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee33() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                _context33.prev = 0;
                _context33.next = 3;
                return _services_admin_new_service__WEBPACK_IMPORTED_MODULE_4__["getEmployee"]();

              case 3:
                response = _context33.sent;
                this.emps = response.data;
                _context33.next = 10;
                break;

              case 7:
                _context33.prev = 7;
                _context33.t0 = _context33["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 10:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this, [[0, 7]]);
      }));

      function getEmployee() {
        return _getEmployee.apply(this, arguments);
      }

      return getEmployee;
    }(),
    deleteEmployee: function () {
      var _deleteEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee34(employee) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete this Area Employee")) {
                  _context34.next = 2;
                  break;
                }

                return _context34.abrupt("return");

              case 2:
                _context34.prev = 2;
                _context34.next = 5;
                return _services_admin_new_service__WEBPACK_IMPORTED_MODULE_4__["deleteEmployee"](employee.id);

              case 5:
                response = _context34.sent;
                this.employees = this.employees.filter(function (obj) {
                  return obj.id != employee.id;
                });
                this.flashMessage.success({
                  message: "Area Employee deleted successfuly!",
                  time: 5000
                });
                _context34.next = 13;
                break;

              case 10:
                _context34.prev = 10;
                _context34.t0 = _context34["catch"](2);
                this.flashMessage.error({
                  message: "Some thing going wrong!",
                  time: 5000
                });

              case 13:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this, [[2, 10]]);
      }));

      function deleteEmployee(_x6) {
        return _deleteEmployee.apply(this, arguments);
      }

      return deleteEmployee;
    }(),
    getManager: function () {
      var _getManager = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee35() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _context35.prev = 0;
                _context35.next = 3;
                return _services_admin_new_service__WEBPACK_IMPORTED_MODULE_4__["getManager"]();

              case 3:
                response = _context35.sent;
                this.managers = response.data;
                _context35.next = 10;
                break;

              case 7:
                _context35.prev = 7;
                _context35.t0 = _context35["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this, [[0, 7]]);
      }));

      function getManager() {
        return _getManager.apply(this, arguments);
      }

      return getManager;
    }(),
    getTotalPropertyCount: function () {
      var _getTotalPropertyCount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee36() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _context36.prev = 0;
                _context36.next = 3;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["getTotalPropertyCount"]();

              case 3:
                response = _context36.sent;
                this.totals = response.data;
                _context36.next = 10;
                break;

              case 7:
                _context36.prev = 7;
                _context36.t0 = _context36["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this, [[0, 7]]);
      }));

      function getTotalPropertyCount() {
        return _getTotalPropertyCount.apply(this, arguments);
      }

      return getTotalPropertyCount;
    }(),
    ReservationCancell: function () {
      var _ReservationCancell = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee37(reserve) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                if (window.confirm("Are you sure you want to Cancel this Reservation")) {
                  _context37.next = 2;
                  break;
                }

                return _context37.abrupt("return");

              case 2:
                _context37.prev = 2;
                _context37.next = 5;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["ReservationCancell"](reserve.id);

              case 5:
                response = _context37.sent;
                // this.properties = this.properties.filter(obj => {
                //             return obj.id !=property.id;
                //     });
                this.flashMessage.success({
                  message: "Property Reservation Cancell Successfuly!",
                  time: 5000
                });
                _context37.next = 12;
                break;

              case 9:
                _context37.prev = 9;
                _context37.t0 = _context37["catch"](2);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 12:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this, [[2, 9]]);
      }));

      function ReservationCancell(_x7) {
        return _ReservationCancell.apply(this, arguments);
      }

      return ReservationCancell;
    }(),
    getTotalRentCount: function () {
      var _getTotalRentCount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee38() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _context38.prev = 0;
                _context38.next = 3;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["getTotalRentCount"]();

              case 3:
                response = _context38.sent;
                this.totalrent = response.data;
                _context38.next = 10;
                break;

              case 7:
                _context38.prev = 7;
                _context38.t0 = _context38["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this, [[0, 7]]);
      }));

      function getTotalRentCount() {
        return _getTotalRentCount.apply(this, arguments);
      }

      return getTotalRentCount;
    }(),
    createManager: function () {
      var _createManager = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee39() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                formData = new FormData();
                formData.append('name', this.user.name);
                formData.append('email', this.user.email);
                formData.append('password', this.user.password);
                formData.append('password_confirmation', this.user.password_confirmation);
                formData.append('phone', this.user.phone);
                formData.append('role', this.user.role);
                formData.append('city_id', this.user.city_id);
                formData.append('avatar', this.user.avatar);
                _context39.prev = 9;
                _context39.next = 12;
                return _services_user_service__WEBPACK_IMPORTED_MODULE_3__["createManager"](formData);

              case 12:
                response = _context39.sent;
                this.users.unshift(response.data);
                this.hideModel;
                this.flashMessage.success({
                  message: 'User Added Successfuly!',
                  time: 5000
                });
                this.user.name = "";
                this.user.email = "";
                this.user.password = "";
                this.user.password_confirmation = "";
                this.user.phone = "";
                this.user.role = "";
                this.user.city_id = "";
                _context39.next = 34;
                break;

              case 25:
                _context39.prev = 25;
                _context39.t0 = _context39["catch"](9);
                _context39.t1 = _context39.t0.response.status;
                _context39.next = _context39.t1 === 422 ? 30 : 32;
                break;

              case 30:
                this.errors = _context39.t0.response.data.errors;
                return _context39.abrupt("break", 34);

              case 32:
                this.flashMessage.error({
                  message: 'Some error occured !',
                  time: 500
                });
                return _context39.abrupt("break", 34);

              case 34:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this, [[9, 25]]);
      }));

      function createManager() {
        return _createManager.apply(this, arguments);
      }

      return createManager;
    }(),
    getSector: function () {
      var _getSector = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee40() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                _context40.prev = 0;
                _context40.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["getSector"]({
                  params: {
                    city_id: this.managerData.city
                  }
                }).then(function (response) {
                  this.sectors = response.data;
                }.bind(this));

              case 3:
                response = _context40.sent;
                _context40.next = 9;
                break;

              case 6:
                _context40.prev = 6;
                _context40.t0 = _context40["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 9:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this, [[0, 6]]);
      }));

      function getSector() {
        return _getSector.apply(this, arguments);
      }

      return getSector;
    }(),
    getSectorEmployee: function () {
      var _getSectorEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee41() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                _context41.prev = 0;
                _context41.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["getSectorEmployee"]({
                  params: {
                    city_id: this.EmployeeData.city
                  }
                }).then(function (response) {
                  this.sectors = response.data;
                }.bind(this));

              case 3:
                response = _context41.sent;
                _context41.next = 9;
                break;

              case 6:
                _context41.prev = 6;
                _context41.t0 = _context41["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 9:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this, [[0, 6]]);
      }));

      function getSectorEmployee() {
        return _getSectorEmployee.apply(this, arguments);
      }

      return getSectorEmployee;
    }(),
    editUsers: function () {
      var _editUsers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee42(users) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                this.editManagerData = _objectSpread({}, users);
                this.$refs.editManager.show();

              case 2:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      function editUsers(_x8) {
        return _editUsers.apply(this, arguments);
      }

      return editUsers;
    }(),
    updateUser: function () {
      var _updateUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee43() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.prev = 0;
                _context43.next = 3;
                return _services_user_service__WEBPACK_IMPORTED_MODULE_3__["updateUser"](this.editManagerData.id, this.editManagerData);

              case 3:
                response = _context43.sent;
                this.users.map(function (users) {
                  if (users.id == response.data.id) {
                    for (var key in response.data) {
                      users[key] = response.data[key];
                    }
                  }
                });
                this.hideEditModal();
                this.flashMessage.success({
                  message: 'User Updated successfully!',
                  time: 5000
                });
                _context43.next = 18;
                break;

              case 9:
                _context43.prev = 9;
                _context43.t0 = _context43["catch"](0);
                _context43.t1 = _context43.t0.response.status;
                _context43.next = _context43.t1 === 422 ? 14 : 16;
                break;

              case 14:
                this.errors = _context43.t0.response.data.errors;
                return _context43.abrupt("break", 18);

              case 16:
                this.flashMessage.error({
                  message: 'Some error occured !',
                  time: 500
                });
                return _context43.abrupt("break", 18);

              case 18:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this, [[0, 9]]);
      }));

      function updateUser() {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }(),
    showModal: function showModal() {
      this.$refs.managerModal.show();
    },
    showRentModal: function showRentModal(engage) {
      this.editPropertyData = _objectSpread({}, engage);
      this.$refs.updateRentModal.show();
    },
    hideRentModal: function hideRentModal() {
      this.$refs.updateRentModal.hide();
    },
    hideModal: function hideModal() {
      this.$refs.managerModal.hide();
    },
    hideEditModal: function hideEditModal() {
      this.$refs.editManager.hide();
    },
    showAreaModal: function showAreaModal() {
      this.$refs.areaModal.show();
    },
    hideAreaModal: function hideAreaModal() {
      this.$refs.areaModal.hide();
    },
    showAreaEmployeeModal: function showAreaEmployeeModal() {
      this.$refs.areaEmployeeModal.show();
    },
    hideAreaEmployeeModal: function hideAreaEmployeeModal() {
      this.$refs.areaEmployeeModal.hide();
    },
    showAnnoucemnetModal: function showAnnoucemnetModal() {
      this.$refs.announceModal.show();
    },
    hideAnnoucemnetModal: function hideAnnoucemnetModal() {
      this.$refs.announceModal.hide();
    }
  }, _defineProperty(_methods, "hideEditModal", function hideEditModal() {
    this.$refs.editManager.hide();
  }), _defineProperty(_methods, "showHide", function showHide(e) {
    this.showName = e.target.value == "1";
  }), _defineProperty(_methods, "approvedUser", function () {
    var _approvedUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee44(user) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee44$(_context44) {
        while (1) {
          switch (_context44.prev = _context44.next) {
            case 0:
              if (window.confirm("Are you sure you want to Approve this User")) {
                _context44.next = 2;
                break;
              }

              return _context44.abrupt("return");

            case 2:
              _context44.prev = 2;
              _context44.next = 5;
              return _services_user_service__WEBPACK_IMPORTED_MODULE_3__["approvedUser"](user.id);

            case 5:
              this.users = this.users.filter(function (obj) {
                return obj.id != user.id;
              });
              this.flashMessage.success({
                message: 'User Approved Successfuly!',
                time: 5000
              });
              _context44.next = 12;
              break;

            case 9:
              _context44.prev = 9;
              _context44.t0 = _context44["catch"](2);
              this.flashMessage.error({
                message: 'Some error occurred!',
                time: 5000
              });

            case 12:
            case "end":
              return _context44.stop();
          }
        }
      }, _callee44, this, [[2, 9]]);
    }));

    function approvedUser(_x9) {
      return _approvedUser.apply(this, arguments);
    }

    return approvedUser;
  }()), _defineProperty(_methods, "attachImage", function attachImage() {
    this.user.avatar = this.$refs.avaterImage.files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function () {
      this.$refs.newAvaterImageDisplay.src = reader.result;
    }.bind(this), false);
    reader.readAsDataURL(this.user.avatar);
  }), _defineProperty(_methods, "editProfileImage", function editProfileImage() {
    this.profile.avatar = this.$refs.editProfileAvatar.files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function () {
      this.$refs.editProfileAvatarDisplay.src = reader.result;
    }.bind(this), false);
    reader.readAsDataURL(this.profile.avatar);
  }), _defineProperty(_methods, "editAttachImage", function editAttachImage() {
    this.editManagerData.avatar = this.$refs.editAvatarImage.files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function () {
      this.$refs.editAvatarImageDisplay.src = reader.result;
    }.bind(this), false);
    reader.readAsDataURL(this.editManagerData.avatar);
  }), _defineProperty(_methods, "getAllRenter", function () {
    var _getAllRenter = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee45() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee45$(_context45) {
        while (1) {
          switch (_context45.prev = _context45.next) {
            case 0:
              _context45.prev = 0;
              _context45.next = 3;
              return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["getAllRenter"]();

            case 3:
              response = _context45.sent;
              this.employees = response.data; // if(response.data.current_page < response.data.last_page)
              //     {
              //         this.moreExists = true;
              //         this.nextPage = response.data.current_page + 1;
              //     }
              //     else{
              //         this.moreExists = false;
              //     }

              _context45.next = 10;
              break;

            case 7:
              _context45.prev = 7;
              _context45.t0 = _context45["catch"](0);
              this.flashMessage.error({
                message: 'Some error occurred!',
                time: 5000
              });

            case 10:
            case "end":
              return _context45.stop();
          }
        }
      }, _callee45, this, [[0, 7]]);
    }));

    function getAllRenter() {
      return _getAllRenter.apply(this, arguments);
    }

    return getAllRenter;
  }()), _defineProperty(_methods, "deleteReservedProperty", function () {
    var _deleteReservedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee46(reserve) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee46$(_context46) {
        while (1) {
          switch (_context46.prev = _context46.next) {
            case 0:
              if (window.confirm("Are you sure you want to delete this Reserved Property")) {
                _context46.next = 2;
                break;
              }

              return _context46.abrupt("return");

            case 2:
              _context46.prev = 2;
              _context46.next = 5;
              return _services_reserved_service__WEBPACK_IMPORTED_MODULE_7__["deleteReservedProperty"](reserve.id);

            case 5:
              response = _context46.sent;
              this.reserved = this.reserved.filter(function (obj) {
                return obj.id != reserve.id;
              });
              this.flashMessage.success({
                message: 'Reserved Property deleted successfuly!',
                time: 5000
              });
              _context46.next = 14;
              break;

            case 10:
              _context46.prev = 10;
              _context46.t0 = _context46["catch"](2);
              console.log(_context46.t0 + '');
              this.flashMessage.error({
                message: 'Some thing going wrong!',
                time: 5000
              });

            case 14:
            case "end":
              return _context46.stop();
          }
        }
      }, _callee46, this, [[2, 10]]);
    }));

    function deleteReservedProperty(_x10) {
      return _deleteReservedProperty.apply(this, arguments);
    }

    return deleteReservedProperty;
  }()), _defineProperty(_methods, "searchEngagedProperty", function () {
    var _searchEngagedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee47() {
      var query, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee47$(_context47) {
        while (1) {
          switch (_context47.prev = _context47.next) {
            case 0:
              _context47.prev = 0;
              query = {
                query: this.query
              };
              _context47.next = 4;
              return _services_reserved_service__WEBPACK_IMPORTED_MODULE_7__["searchEngagedProperty"](query);

            case 4:
              response = _context47.sent;
              this.reserved = response.data;
              _context47.next = 11;
              break;

            case 8:
              _context47.prev = 8;
              _context47.t0 = _context47["catch"](0);
              this.flashMessage.error({
                message: "Some error occurred",
                time: 5000
              });

            case 11:
            case "end":
              return _context47.stop();
          }
        }
      }, _callee47, this, [[0, 8]]);
    }));

    function searchEngagedProperty() {
      return _searchEngagedProperty.apply(this, arguments);
    }

    return searchEngagedProperty;
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
  }), _defineProperty(_methods, "loadFavouritedProperty", function () {
    var _loadFavouritedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee48() {
      var _this6 = this;

      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee48$(_context48) {
        while (1) {
          switch (_context48.prev = _context48.next) {
            case 0:
              _context48.prev = 0;
              _context48.next = 3;
              return _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["loadFavouritedProperty"](this.nextPage);

            case 3:
              response = _context48.sent;

              if (response.data.current_page < response.data.last_page) {
                this.moreExistsFavourits = true;
                this.nextPage = response.data.current_page + 1;
              } else {
                this.moreExistsFavourits = false;
              }

              response.data.data.forEach(function (data) {
                _this6.favourits.push(data);
              });
              _context48.next = 11;
              break;

            case 8:
              _context48.prev = 8;
              _context48.t0 = _context48["catch"](0);
              this.flashMessage.error({
                message: "Some error occurred during load more employees",
                time: 5000
              });

            case 11:
            case "end":
              return _context48.stop();
          }
        }
      }, _callee48, this, [[0, 8]]);
    }));

    function loadFavouritedProperty() {
      return _loadFavouritedProperty.apply(this, arguments);
    }

    return loadFavouritedProperty;
  }()), _methods),
  created: function created() {
    this.getCity();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/AdminDashboard.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/AdminDashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);", ""]);

// module
exports.push([module.i, "\n@media only screen and (max-width:660px ){\n.mobiledash{\n             display: flex;\n             justify-content: center;\n}\n.mobiledash{\n             margin-left: 0px !important;\n}\n}\n.form-popup {\n  display: none;\n  position: absolute;\n  width: 300px;\n  right: 50px;\n  border: 3px solid #F1F1F1;\n  z-index: 9;\n}\n.form-container {\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n}\n.form-container input[type=text], .form-container input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #F1F1F1;\n}\n.form-container input[type=text]:focus, .form-container input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n.form-container .btnsubmit {\n  color: white;\n}\n.form-container .btn:hover, .open-button:hover {\n  opacity: 1;\n}\n#show-btn{\n    z-index: 2;\n    border-radius: 50px;\n    height: 80px;\n    width: 80px;\n}\n.invoice{\n}\n.invoiceform{\n            background:white;\n            border: 1px solid gray;\n}\n.invoiceform h5{\n            font-weight:bolder;\n}\n.invoiceform .part1{\n            background-color: #38b16e;\n            background-image: linear-gradient(to right,#42b45d,#20ab94);\n            color:white;\n            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);\n            clip-path: polygon(0 0, 73% 0%, 100% 100%, 0% 100%);\n            width:90%;\n            height:151px;\n            z-index:2;\n            position:absolute;\n            padding: 20px;\n}\n.invoiceform .bgpart1{\n            background-color: black;\n            background-image: linear-gradient(to right,black,#20ab94);\n            color:white;\n            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);\n            clip-path: polygon(0 0, 73% 0%, 100% 100%, 0% 100%);\n            width:100%;\n            height:151px;\n}\n.invoiceform .part1 h1{\n            font-family: 'Roboto', sans-serif;\n            letter-spacing:0.5rem;\n}\n.logoimg{\n            background-color: #2E86C1;\n            background-image: linear-gradient(to left,#85C1E9 ,#2874A6);\n            color: #fff;\n            height: 200px;\n            font-weight: bolder;\n            border-top-left-radius: 12px;\n}\n.part2{\n            margin-top: 10px;\n}\n.thead{\n            background-color: #38b16e;\n            background-image: linear-gradient(to right,#42b45d,#20ab94);\n            color:white;\n}\n.part1sbtotal{\n            background-color: #38b16e;\n            background-image: linear-gradient(to right,#42b45d,#20ab94);\n            color:white;\n            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);\n            clip-path: polygon(0 0, 100% 0%, 100% 100%,6% 3%);\n            width:93%;\n            height:107px;\n            z-index:2;\n            position:absolute;\n}\n.part2sbtotal{\n            background-color: #0b0b0b;\n            background-image: linear-gradient(to right,#164203,#20AB94);\n            color: white;\n            -webkit-clip-path: polygon(0 0, 100% 35%, 100% 65%, 0% 100%);\n            clip-path: polygon(0 0, 100% 0%, 100% 100%);\n            width: 100%;\n            height: 119px;\n}\n#inputdesign {\n        width: 100%;\n        height: 120px;\n        background: white;\n        position: relative;\n        border-radius: 10px;\n        padding: 5px;\n        box-shadow: 3px 5px 5px 5px #888888;\n        border-bottom-left-radius: 30px;\n        border-top-right-radius: 39px;\n}\n#talkbubble {\n      width: 200px;\n      height:auto;\n      background: white;\n      position: relative;\n      border-radius: 10px;\n      padding: 5px;\n      box-shadow: 3px 5px 5px 5px #888888;\n      margin-bottom: 20px;\n      border-bottom-left-radius: 30px;\n      border-top-right-radius: 39px;\n}\n#talkbubble:after {\n      content: \"\";\n      position: absolute;\n      left: 100%;\n      top: 35px;\n      width: 0;\n      height: 0;\n      border-top: 13px solid transparent;\n      border-left: 26px solid white;\n      border-right-width: 20px solid transparent;\n      border-bottom: 13px solid transparent;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/AdminDashboard.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/AdminDashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/AdminDashboard.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/AdminDashboard.vue?vue&type=template&id=2a2585e4&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/AdminDashboard.vue?vue&type=template&id=2a2585e4& ***!
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
                                            return _vm.searchInvoiceQuery(
                                              $event
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
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
                                                  {
                                                    attrs: { value: "unpaid" }
                                                  },
                                                  [_vm._v("Un Paid Property")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: { value: "reserv" }
                                                  },
                                                  [_vm._v("Reserved Property")]
                                                )
                                              ]
                                            )
                                          ]
                                        )
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
                                                    staticStyle: {
                                                      width: "5%"
                                                    },
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
                                                  [_vm._v("Sector")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  { attrs: { scope: "col" } },
                                                  [_vm._v("Due Date")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  { attrs: { scope: "col" } },
                                                  [_vm._v("Paid Date")]
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
                                            _vm._l(_vm.engaged, function(
                                              engage,
                                              index
                                            ) {
                                              return _c(
                                                "tbody",
                                                { key: index },
                                                [
                                                  engage.rent === "paid"
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
                                                                _vm._s(
                                                                  index + 1
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          engage.cnic
                                                            ? _c(
                                                                "td",
                                                                [
                                                                  _c(
                                                                    "router-link",
                                                                    {
                                                                      attrs: {
                                                                        to: {
                                                                          name:
                                                                            "show-reserved",
                                                                          params: {
                                                                            id:
                                                                              engage.id
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                                    " +
                                                                          _vm._s(
                                                                            engage.property_name
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
                                                                            "show-admin",
                                                                          params: {
                                                                            id:
                                                                              engage.id
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                                    " +
                                                                          _vm._s(
                                                                            engage.property_name
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
                                                                engage.city_name
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                engage.sector
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                engage.created_at
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                engage.updated_at
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                engage.size
                                                              ) +
                                                                " " +
                                                                _vm._s(
                                                                  engage.unit
                                                                )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "router-link",
                                                            {
                                                              attrs: {
                                                                to: {
                                                                  name:
                                                                    "year-invoice",
                                                                  params: {
                                                                    id:
                                                                      engage.id
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("td", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    engage.rent_price
                                                                  )
                                                                )
                                                              ])
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                engage.rent
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            [
                                                              engage.cnic
                                                                ? _c(
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
                                                                          "un-paid rent"
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.unPaidPropertyRent(
                                                                            engage
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _c("i", {
                                                                        staticClass:
                                                                          "fas fa-money-check-alt",
                                                                        staticStyle: {
                                                                          color:
                                                                            "white"
                                                                        }
                                                                      })
                                                                    ]
                                                                  )
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              _c(
                                                                "router-link",
                                                                {
                                                                  attrs: {
                                                                    to: {
                                                                      name:
                                                                        "invoice-admin",
                                                                      params: {
                                                                        id:
                                                                          engage.id
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
                                                              ),
                                                              _vm._v(" "),
                                                              engage.cnic
                                                                ? _c(
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
                                                                          "edit rent"
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.showRentModal(
                                                                            engage
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _c("i", {
                                                                        staticClass:
                                                                          "fas fa-pencil-alt",
                                                                        staticStyle: {
                                                                          color:
                                                                            "white"
                                                                        }
                                                                      })
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    : _c(
                                                        "tr",
                                                        {
                                                          staticClass:
                                                            "text-danger"
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
                                                                _vm._s(
                                                                  index + 1
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          engage.cnic
                                                            ? _c(
                                                                "td",
                                                                [
                                                                  _c(
                                                                    "router-link",
                                                                    {
                                                                      attrs: {
                                                                        to: {
                                                                          name:
                                                                            "show-reserved",
                                                                          params: {
                                                                            id:
                                                                              engage.id
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                                    " +
                                                                          _vm._s(
                                                                            engage.property_name
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
                                                                            "show-admin",
                                                                          params: {
                                                                            id:
                                                                              engage.id
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                                    " +
                                                                          _vm._s(
                                                                            engage.property_name
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
                                                                engage.city_name
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                engage.sector
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                engage.created_at
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                engage.updated_at
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                engage.size
                                                              ) +
                                                                " " +
                                                                _vm._s(
                                                                  engage.unit
                                                                )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          engage.rent === "paid"
                                                            ? _c(
                                                                "router-link",
                                                                {
                                                                  attrs: {
                                                                    to: {
                                                                      name:
                                                                        "year-invoice",
                                                                      params: {
                                                                        id:
                                                                          engage.id
                                                                      }
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        engage.rent_price
                                                                      )
                                                                    )
                                                                  ])
                                                                ]
                                                              )
                                                            : _c(
                                                                "router-link",
                                                                {
                                                                  attrs: {
                                                                    to: {
                                                                      name:
                                                                        "invoice-admin",
                                                                      params: {
                                                                        id:
                                                                          engage.id
                                                                      }
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        engage.rent_price
                                                                      )
                                                                    )
                                                                  ])
                                                                ]
                                                              ),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                engage.rent
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            [
                                                              engage.cnic
                                                                ? _c(
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
                                                                          "paid rent"
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.paidPropertyRent(
                                                                            engage
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _c("i", {
                                                                        staticClass:
                                                                          "fas fa-money-check-alt",
                                                                        staticStyle: {
                                                                          color:
                                                                            "white"
                                                                        }
                                                                      })
                                                                    ]
                                                                  )
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              _c(
                                                                "router-link",
                                                                {
                                                                  attrs: {
                                                                    to: {
                                                                      name:
                                                                        "invoice-admin",
                                                                      params: {
                                                                        id:
                                                                          engage.id
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
                                                              ),
                                                              _vm._v(" "),
                                                              engage.cnic
                                                                ? _c(
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
                                                                          "edit rent"
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.showRentModal(
                                                                            engage
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _c("i", {
                                                                        staticClass:
                                                                          "fas fa-pencil-alt",
                                                                        staticStyle: {
                                                                          color:
                                                                            "white"
                                                                        }
                                                                      })
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                ]
                                              )
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
                                                staticClass:
                                                  "btn btn-info btn-sm",
                                                attrs: { type: "button" },
                                                on: {
                                                  click: _vm.loadProperties
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-arrow-down"
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
                                  _c(
                                    "div",
                                    { staticClass: "card-body shadow" },
                                    [
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
                                              {
                                                staticClass: "text-danger mt-4"
                                              },
                                              [
                                                _vm._v("Pending rent:"),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass: "float-right"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.pendingRent) +
                                                        " pkr"
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
                                                  {
                                                    staticClass: "float-right"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.paidRent) +
                                                        " pkr"
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
                                                  {
                                                    staticClass: "float-right"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.rents) + " pkr"
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
                                    ]
                                  )
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
                                      "Total Properties :" + _vm._s(_vm.totals)
                                    )
                                  ]
                                ),
                                _vm._v(" "),
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
                                          _c(
                                            "option",
                                            { attrs: { value: "" } },
                                            [_vm._v("Select Property")]
                                          ),
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
                                          _vm._v("Sector")
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
                                        _c(
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
                                                    name: "profile-admin",
                                                    params: {
                                                      id: property.user_id
                                                    }
                                                  }
                                                }
                                              },
                                              [
                                                _c("td", [
                                                  _vm._v(_vm._s(property.name))
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(property.phone))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(property.city_name))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(property.sector))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(property.property_name)
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
                                              _vm._v(_vm._s(property.status))
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
                                                        name: "show-admin",
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
                                                          "btn btn-info btn-sm",
                                                        attrs: {
                                                          type: "button"
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-eye",
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
                                          ],
                                          1
                                        )
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
                                    value: _vm.moreExistsProperties,
                                    expression: "moreExistsProperties"
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
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tab",
                    { attrs: { title: "Users" } },
                    [
                      _c("b-card-text", [
                        _c(
                          "button",
                          {
                            staticClass: " btn btn-sm btn-info position-fixed",
                            attrs: { id: "show-btn" },
                            on: { click: _vm.showModal }
                          },
                          [
                            _c("span", { staticClass: "icon text-white-50" }, [
                              _c("i", { staticClass: "far fa-user" })
                            ]),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-white" }, [
                              _vm._v("Add")
                            ])
                          ]
                        ),
                        _vm._v(" "),
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
                                  [_vm._v("All Users")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "form",
                                  {
                                    staticClass:
                                      "form-inline  justify-content-center md-form form-sm active-cyan-2 bd-highlight font-weight-bold  d-block ml-auto",
                                    on: {
                                      submit: function($event) {
                                        $event.preventDefault()
                                        return _vm.searchUser($event)
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
                                              value: _vm.userQuery,
                                              expression: "userQuery"
                                            }
                                          ],
                                          staticClass: "form-control",
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
                                                _vm.userQuery = $event.target
                                                  .multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              },
                                              function($event) {
                                                return _vm.searchUser()
                                              }
                                            ]
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "" } },
                                            [_vm._v("Select user to check")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "manager" } },
                                            [_vm._v("Manager")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "employee" } },
                                            [_vm._v("Employee")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "csr" } },
                                            [_vm._v("CSR")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "tenant" } },
                                            [_vm._v("Tenant")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "landlord" } },
                                            [_vm._v("Landlord")]
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
                                _c("div", { staticClass: "table-responsive" }, [
                                  _c(
                                    "table",
                                    { staticClass: "table table-hover" },
                                    [
                                      _c("thead", [
                                        _c("tr", [
                                          _c(
                                            "th",
                                            { attrs: { scope: "col" } },
                                            [_vm._v("#")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { attrs: { scope: "col" } },
                                            [_vm._v("Name")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { attrs: { scope: "col" } },
                                            [_vm._v("Email")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { attrs: { scope: "col" } },
                                            [_vm._v("Phone")]
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
                                            [_vm._v("Image")]
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "tbody",
                                        _vm._l(_vm.users, function(
                                          visitor,
                                          index
                                        ) {
                                          return _c(
                                            "tr",
                                            { key: index },
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
                                                      name: "profile-admin",
                                                      params: { id: visitor.id }
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
                                                        _vm._s(visitor.name)
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(_vm._s(visitor.email))
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(_vm._s(visitor.phone))
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(visitor.city_name)
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c("img", {
                                                  staticStyle: {
                                                    width: "50px",
                                                    "border-radius": "50%",
                                                    "margin-top": "-10px",
                                                    height: "50px"
                                                  },
                                                  attrs: {
                                                    src:
                                                      _vm.$store.state
                                                        .serverPath +
                                                      "storage/" +
                                                      visitor.avatar
                                                  }
                                                })
                                              ])
                                            ],
                                            1
                                          )
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
                                          value: _vm.moreExistsStaff,
                                          expression: "moreExistsStaff"
                                        }
                                      ]
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-info btn-sm",
                                          attrs: { type: "button" },
                                          on: { click: _vm.loadUser }
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
                                  [_vm._v("Favourited Properties")]
                                ),
                                _vm._v(" "),
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
                                          _c(
                                            "option",
                                            { attrs: { value: "" } },
                                            [_vm._v("Select React")]
                                          ),
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
                                          _c(
                                            "th",
                                            { attrs: { scope: "row" } },
                                            [_vm._v(_vm._s(index + 1))]
                                          ),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(favourit.property_name)
                                            )
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
                                                      params: {
                                                        id: favourit.id
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
                                        value: _vm.moreExistsFavourits,
                                        expression: "moreExistsFavourits"
                                      }
                                    ]
                                  },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-info btn-sm",
                                        attrs: { type: "button" },
                                        on: {
                                          click: _vm.loadFavouritedProperty
                                        }
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
                    { attrs: { title: "Area Manager" } },
                    [
                      _c(
                        "button",
                        {
                          staticClass: " btn btn-sm btn-info position-fixed",
                          attrs: { id: "show-btn" },
                          on: { click: _vm.showAreaModal }
                        },
                        [
                          _c("span", { staticClass: "icon text-white-50" }, [
                            _c("i", { staticClass: "far fa-user" })
                          ]),
                          _c("br"),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-white" }, [
                            _vm._v("Add Area")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("b-card-text", [
                        _c("div", { staticClass: "container-fluid" }, [
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
                                          _vm._v("Name")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("phone")
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
                                          _vm._v("Action")
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(_vm.areaManagers, function(
                                        area,
                                        index
                                      ) {
                                        return _c(
                                          "tr",
                                          { key: index },
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
                                                    name: "profile-admin",
                                                    params: { id: area.user_id }
                                                  }
                                                }
                                              },
                                              [
                                                _c("td", [
                                                  _vm._v(_vm._s(area.user))
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(area.phone))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(area.city))
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              _vm._l(area.sectors, function(
                                                sector,
                                                index
                                              ) {
                                                return _c(
                                                  "td",
                                                  { key: index },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            " +
                                                        _vm._s(sector.sector)
                                                    ),
                                                    _c("br")
                                                  ]
                                                )
                                              }),
                                              0
                                            ),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-danger btn-sm",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.deleteUser(
                                                        area
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fas fa-trash"
                                                  }),
                                                  _vm._v(
                                                    "Delete\n                                                        "
                                                  )
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
                                                      return _vm.editUsers(area)
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-pencil-alt"
                                                  }),
                                                  _vm._v(
                                                    "Edit\n                                                        "
                                                  )
                                                ]
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      }),
                                      0
                                    )
                                  ]
                                )
                              ])
                            ])
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
                              ref: "areaModal",
                              attrs: {
                                "hide-footer": "",
                                title: "Add Area Manager"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.createAreaManager($event)
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
                                                value: _vm.managerData.name,
                                                expression: "managerData.name"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              id: "exampleFormControlSelect1"
                                            },
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
                                                  _vm.managerData,
                                                  "name",
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
                                              [_vm._v("Select Manager")]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.managers, function(
                                              user,
                                              index
                                            ) {
                                              return _c(
                                                "option",
                                                {
                                                  key: index,
                                                  domProps: { value: user.id }
                                                },
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
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.managerData.city,
                                                expression: "managerData.city"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              id: "exampleFormControlSelect1"
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
                                                  _vm.$set(
                                                    _vm.managerData,
                                                    "city",
                                                    $event.target.multiple
                                                      ? $$selectedVal
                                                      : $$selectedVal[0]
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.getSector()
                                                }
                                              ]
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              { attrs: { value: "" } },
                                              [_vm._v("Select city")]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.cities, function(
                                              city,
                                              index
                                            ) {
                                              return _c(
                                                "option",
                                                {
                                                  key: index,
                                                  domProps: { value: city.id }
                                                },
                                                [_vm._v(_vm._s(city.city_name))]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-md-12" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.managerData.sector,
                                                expression: "managerData.sector"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              id: "exampleFormControlSelect1",
                                              multiple: "multiple"
                                            },
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
                                                  _vm.managerData,
                                                  "sector",
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
                                              [_vm._v("Select Manager")]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.sectors, function(
                                              sector,
                                              index
                                            ) {
                                              return _c(
                                                "option",
                                                {
                                                  key: index,
                                                  domProps: { value: sector.id }
                                                },
                                                [_vm._v(_vm._s(sector.sector))]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group mt-3" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-success",
                                          staticStyle: {
                                            width: "300px",
                                            "margin-left": "69px"
                                          },
                                          attrs: { type: "submit" }
                                        },
                                        [_vm._v("Save Area Manager")]
                                      )
                                    ]
                                  )
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
                              ref: "editManager",
                              attrs: {
                                "hide-footer": "",
                                size: "lg",
                                title: "Edit Manager"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.updateUser($event)
                                    }
                                  }
                                },
                                [
                                  _c("span", [
                                    _c("img", {
                                      ref: "editAvatarImageDisplay",
                                      staticClass: "img-thumbnail",
                                      staticStyle: {
                                        width: "100px",
                                        "border-radius": "50%",
                                        "margin-top": "-10px",
                                        "margin-left": "328px",
                                        height: "100px"
                                      },
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          _vm.editManagerData.avatar,
                                        alt: "Image1"
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-lg-6 col-md-6 col-sm-6"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlInput1"
                                                }
                                              },
                                              [_vm._v("Full Name")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.editManagerData.name,
                                                  expression:
                                                    "editManagerData.name"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                name: "name",
                                                placeholder: "Enter Full name"
                                              },
                                              domProps: {
                                                value: _vm.editManagerData.name
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.editManagerData,
                                                    "name",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.name
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.errors.name[0])
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-lg-6 col-md-6 col-sm-6"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlInput1"
                                                }
                                              },
                                              [_vm._v("Email")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.editManagerData.email,
                                                  expression:
                                                    "editManagerData.email"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                id: "email",
                                                name: "email",
                                                placeholder: "Enter Email"
                                              },
                                              domProps: {
                                                value: _vm.editManagerData.email
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.editManagerData,
                                                    "email",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.email
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.email[0]
                                                      )
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-lg-6 col-md-6 col-sm-6"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlInput1"
                                                }
                                              },
                                              [_vm._v("Password")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.editManagerData
                                                      .password,
                                                  expression:
                                                    "editManagerData.password"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "password",
                                                id: "password",
                                                name: "password",
                                                placeholder: "Enter Password"
                                              },
                                              domProps: {
                                                value:
                                                  _vm.editManagerData.password
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.editManagerData,
                                                    "password",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.password
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.password[0]
                                                      )
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-lg-6 col-md-6 col-sm-6"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlInput1"
                                                }
                                              },
                                              [_vm._v("Confirm Password")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.editManagerData
                                                      .password_confirmation,
                                                  expression:
                                                    "editManagerData.password_confirmation"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "password",
                                                id: "password_confirmation",
                                                name: "password_confirmation",
                                                placeholder:
                                                  "Enter Confirm Password"
                                              },
                                              domProps: {
                                                value:
                                                  _vm.editManagerData
                                                    .password_confirmation
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.editManagerData,
                                                    "password_confirmation",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.password_confirmation
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
                                                          .password_confirmation[0]
                                                      )
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-lg-6 col-md-6 col-sm-6"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlInput1"
                                                }
                                              },
                                              [_vm._v("Phone")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.editManagerData.phone,
                                                  expression:
                                                    "editManagerData.phone"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                placeholder:
                                                  "Enter Phone Number"
                                              },
                                              domProps: {
                                                value: _vm.editManagerData.phone
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.editManagerData,
                                                    "phone",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.phone
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.phone[0]
                                                      )
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-lg-6 col-md-6 col-sm-6"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlInput1"
                                                }
                                              },
                                              [_vm._v("Rule")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.editManagerData.role,
                                                  expression:
                                                    "editManagerData.role"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: { type: "text" },
                                              domProps: {
                                                value: _vm.editManagerData.role
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.editManagerData,
                                                    "role",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.role
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.errors.role[0])
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      { staticClass: "col-md-6 col-sm-6" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlSelect1"
                                                }
                                              },
                                              [_vm._v("Select your City")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "select",
                                              {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.editManagerData
                                                        .city_id,
                                                    expression:
                                                      "editManagerData.city_id"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  id:
                                                    "exampleFormControlSelect1"
                                                },
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
                                                      _vm.editManagerData,
                                                      "city_id",
                                                      $event.target.multiple
                                                        ? $$selectedVal
                                                        : $$selectedVal[0]
                                                    )
                                                  }
                                                }
                                              },
                                              _vm._l(_vm.cities, function(
                                                city,
                                                index
                                              ) {
                                                return _c(
                                                  "option",
                                                  {
                                                    key: index,
                                                    domProps: { value: city.id }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(city.city_name)
                                                    )
                                                  ]
                                                )
                                              }),
                                              0
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-md-6 col-sm-6" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlInput1"
                                                }
                                              },
                                              [_vm._v("Avatar")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              ref: "editAvatarImage",
                                              staticClass: "form-control-file",
                                              staticStyle: { width: "103%" },
                                              attrs: {
                                                type: "file",
                                                id: "exampleFormControlFile1"
                                              },
                                              on: {
                                                change: _vm.editAttachImage
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.avatar
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.avatar[0]
                                                      )
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-check" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.editManagerData.terms,
                                          expression: "editManagerData.terms"
                                        }
                                      ],
                                      staticClass: "form-check-input",
                                      attrs: {
                                        type: "checkbox",
                                        id: "exampleCheck1"
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.editManagerData.terms
                                        )
                                          ? _vm._i(
                                              _vm.editManagerData.terms,
                                              null
                                            ) > -1
                                          : _vm.editManagerData.terms
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.editManagerData.terms,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.editManagerData,
                                                  "terms",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.editManagerData,
                                                  "terms",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.editManagerData,
                                              "terms",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      {
                                        staticClass: "form-check-label",
                                        attrs: { for: "exampleCheck1" }
                                      },
                                      [_vm._v("Terms")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-success",
                                        staticStyle: {
                                          "margin-left": "255px",
                                          width: "221px"
                                        },
                                        attrs: { type: "submit" }
                                      },
                                      [_vm._v("Update Manager")]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tab",
                    { attrs: { title: "Area Employee" } },
                    [
                      _c(
                        "button",
                        {
                          staticClass: " btn btn-sm btn-info position-fixed",
                          attrs: { id: "show-btn" },
                          on: { click: _vm.showAreaEmployeeModal }
                        },
                        [
                          _c("span", { staticClass: "icon text-white-50" }, [
                            _c("i", { staticClass: "far fa-user" })
                          ]),
                          _c("br"),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-white" }, [
                            _vm._v("Add Area")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("b-card-text", [
                        _c("div", { staticClass: "container-fluid" }, [
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
                                          _vm._v("Name")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("phone")
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
                                          _vm._v("Action")
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(_vm.employees, function(
                                        employee,
                                        index
                                      ) {
                                        return _c(
                                          "tr",
                                          { key: index },
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
                                                    name: "profile-admin",
                                                    params: {
                                                      id: employee.user_id
                                                    }
                                                  }
                                                }
                                              },
                                              [
                                                _c("td", [
                                                  _vm._v(_vm._s(employee.name))
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(employee.phone))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(employee.city_name))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(employee.sector))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-danger btn-sm",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.deleteEmployee(
                                                        employee
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
                                                      return _vm.editAreaEmployee(
                                                        employee
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
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      }),
                                      0
                                    )
                                  ]
                                )
                              ])
                            ])
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
                              ref: "areaEmployeeModal",
                              attrs: {
                                "hide-footer": "",
                                title: "Add Area Employee"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.createAreaEmployee($event)
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
                                                value: _vm.EmployeeData.name,
                                                expression: "EmployeeData.name"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              id: "exampleFormControlSelect1"
                                            },
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
                                                  _vm.EmployeeData,
                                                  "name",
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
                                              [_vm._v("Select Employee")]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.emps, function(
                                              emp,
                                              index
                                            ) {
                                              return _c(
                                                "option",
                                                {
                                                  key: index,
                                                  domProps: { value: emp.id }
                                                },
                                                [_vm._v(_vm._s(emp.name))]
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
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.EmployeeData.city,
                                                expression: "EmployeeData.city"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              id: "exampleFormControlSelect1"
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
                                                  _vm.$set(
                                                    _vm.EmployeeData,
                                                    "city",
                                                    $event.target.multiple
                                                      ? $$selectedVal
                                                      : $$selectedVal[0]
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.getSectorEmployee()
                                                }
                                              ]
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              { attrs: { value: "" } },
                                              [_vm._v("Select city")]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.cities, function(
                                              city,
                                              index
                                            ) {
                                              return _c(
                                                "option",
                                                {
                                                  key: index,
                                                  domProps: { value: city.id }
                                                },
                                                [_vm._v(_vm._s(city.city_name))]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-md-12" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.EmployeeData.sector,
                                                expression:
                                                  "EmployeeData.sector"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              id: "exampleFormControlSelect1"
                                            },
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
                                                  _vm.EmployeeData,
                                                  "sector",
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
                                              [_vm._v("Select Sector")]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.sectors, function(
                                              sector,
                                              index
                                            ) {
                                              return _c(
                                                "option",
                                                {
                                                  key: index,
                                                  domProps: { value: sector.id }
                                                },
                                                [_vm._v(_vm._s(sector.sector))]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group mt-3" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-success",
                                          staticStyle: {
                                            width: "300px",
                                            "margin-left": "69px"
                                          },
                                          attrs: { type: "submit" }
                                        },
                                        [_vm._v("Save Area Employee")]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-modal",
                            {
                              ref: "editAreaEmployee",
                              attrs: {
                                "hide-footer": "",
                                title: "Update Area Employee"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.updateAreaEmployee($event)
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
                                                value:
                                                  _vm.editAreaEmployeeData.name,
                                                expression:
                                                  "editAreaEmployeeData.name"
                                              }
                                            ],
                                            staticClass: "form-control",
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
                                                  _vm.editAreaEmployeeData,
                                                  "name",
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
                                              [_vm._v("Select Employee")]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.emps, function(
                                              emp,
                                              index
                                            ) {
                                              return _c(
                                                "option",
                                                {
                                                  key: index,
                                                  domProps: { value: emp.id }
                                                },
                                                [_vm._v(_vm._s(emp.name))]
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
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.editAreaEmployeeData.city,
                                                expression:
                                                  "editAreaEmployeeData.city"
                                              }
                                            ],
                                            staticClass: "form-control",
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
                                                  _vm.$set(
                                                    _vm.editAreaEmployeeData,
                                                    "city",
                                                    $event.target.multiple
                                                      ? $$selectedVal
                                                      : $$selectedVal[0]
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.getSectorEmployee()
                                                }
                                              ]
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              { attrs: { value: "" } },
                                              [_vm._v("Select city")]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.cities, function(
                                              city,
                                              index
                                            ) {
                                              return _c(
                                                "option",
                                                {
                                                  key: index,
                                                  domProps: { value: city.id }
                                                },
                                                [_vm._v(_vm._s(city.city_name))]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-md-12" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.editAreaEmployeeData
                                                    .sector,
                                                expression:
                                                  "editAreaEmployeeData.sector"
                                              }
                                            ],
                                            staticClass: "form-control",
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
                                                  _vm.editAreaEmployeeData,
                                                  "sector",
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
                                              [_vm._v("Select Sector")]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.sectors, function(
                                              sector,
                                              index
                                            ) {
                                              return _c(
                                                "option",
                                                {
                                                  key: index,
                                                  domProps: { value: sector.id }
                                                },
                                                [_vm._v(_vm._s(sector.sector))]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group mt-3" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-success",
                                          staticStyle: {
                                            width: "300px",
                                            "margin-left": "69px"
                                          },
                                          attrs: { type: "submit" }
                                        },
                                        [_vm._v("Save Area Employee")]
                                      )
                                    ]
                                  )
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
                              ref: "editManager",
                              attrs: {
                                "hide-footer": "",
                                size: "lg",
                                title: "Edit Manager"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.updateUser($event)
                                    }
                                  }
                                },
                                [
                                  _c("span", [
                                    _c("img", {
                                      ref: "editAvatarImageDisplay",
                                      staticClass: "img-thumbnail",
                                      staticStyle: {
                                        width: "100px",
                                        "border-radius": "50%",
                                        "margin-top": "-10px",
                                        "margin-left": "328px",
                                        height: "100px"
                                      },
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          _vm.editManagerData.avatar,
                                        alt: "Image1"
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-lg-6 col-md-6 col-sm-6"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlInput1"
                                                }
                                              },
                                              [_vm._v("Full Name")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.editManagerData.name,
                                                  expression:
                                                    "editManagerData.name"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                placeholder: "Enter Full name"
                                              },
                                              domProps: {
                                                value: _vm.editManagerData.name
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.editManagerData,
                                                    "name",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.name
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.errors.name[0])
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-lg-6 col-md-6 col-sm-6"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlInput1"
                                                }
                                              },
                                              [_vm._v("Email")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.editManagerData.email,
                                                  expression:
                                                    "editManagerData.email"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                placeholder: "Enter Email"
                                              },
                                              domProps: {
                                                value: _vm.editManagerData.email
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.editManagerData,
                                                    "email",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.email
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.email[0]
                                                      )
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-lg-6 col-md-6 col-sm-6"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlInput1"
                                                }
                                              },
                                              [_vm._v("Password")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.editManagerData
                                                      .password,
                                                  expression:
                                                    "editManagerData.password"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "password",
                                                placeholder: "Enter Password"
                                              },
                                              domProps: {
                                                value:
                                                  _vm.editManagerData.password
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.editManagerData,
                                                    "password",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.password
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.password[0]
                                                      )
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-lg-6 col-md-6 col-sm-6"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlInput1"
                                                }
                                              },
                                              [_vm._v("Confirm Password")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.editManagerData
                                                      .password_confirmation,
                                                  expression:
                                                    "editManagerData.password_confirmation"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "password",
                                                id: "password_confirmation",
                                                name: "password_confirmation",
                                                placeholder:
                                                  "Enter Confirm Password"
                                              },
                                              domProps: {
                                                value:
                                                  _vm.editManagerData
                                                    .password_confirmation
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.editManagerData,
                                                    "password_confirmation",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.password_confirmation
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
                                                          .password_confirmation[0]
                                                      )
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-lg-6 col-md-6 col-sm-6"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlInput1"
                                                }
                                              },
                                              [_vm._v("Phone")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.editManagerData.phone,
                                                  expression:
                                                    "editManagerData.phone"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                id: "phone",
                                                name: "phone",
                                                placeholder:
                                                  "Enter Phone Number"
                                              },
                                              domProps: {
                                                value: _vm.editManagerData.phone
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.editManagerData,
                                                    "phone",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.phone
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.phone[0]
                                                      )
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-lg-6 col-md-6 col-sm-6"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlInput1"
                                                }
                                              },
                                              [_vm._v("Rule")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.editManagerData.role,
                                                  expression:
                                                    "editManagerData.role"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                id: "role",
                                                name: "role"
                                              },
                                              domProps: {
                                                value: _vm.editManagerData.role
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.editManagerData,
                                                    "role",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.role
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.errors.role[0])
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      { staticClass: "col-md-6 col-sm-6" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlSelect1"
                                                }
                                              },
                                              [_vm._v("Select your City")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "select",
                                              {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.editManagerData
                                                        .city_id,
                                                    expression:
                                                      "editManagerData.city_id"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  id:
                                                    "exampleFormControlSelect1"
                                                },
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
                                                      _vm.editManagerData,
                                                      "city_id",
                                                      $event.target.multiple
                                                        ? $$selectedVal
                                                        : $$selectedVal[0]
                                                    )
                                                  }
                                                }
                                              },
                                              _vm._l(_vm.cities, function(
                                                city,
                                                index
                                              ) {
                                                return _c(
                                                  "option",
                                                  {
                                                    key: index,
                                                    domProps: { value: city.id }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(city.city_name)
                                                    )
                                                  ]
                                                )
                                              }),
                                              0
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-md-6 col-sm-6" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for:
                                                    "exampleFormControlInput1"
                                                }
                                              },
                                              [_vm._v("Avatar")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              ref: "editAvatarImage",
                                              staticClass: "form-control-file",
                                              staticStyle: { width: "103%" },
                                              attrs: {
                                                type: "file",
                                                id: "exampleFormControlFile1"
                                              },
                                              on: {
                                                change: _vm.editAttachImage
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.avatar
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.avatar[0]
                                                      )
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-check" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.editManagerData.terms,
                                          expression: "editManagerData.terms"
                                        }
                                      ],
                                      staticClass: "form-check-input",
                                      attrs: {
                                        type: "checkbox",
                                        id: "exampleCheck1"
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.editManagerData.terms
                                        )
                                          ? _vm._i(
                                              _vm.editManagerData.terms,
                                              null
                                            ) > -1
                                          : _vm.editManagerData.terms
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.editManagerData.terms,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.editManagerData,
                                                  "terms",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.editManagerData,
                                                  "terms",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.editManagerData,
                                              "terms",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      {
                                        staticClass: "form-check-label",
                                        attrs: { for: "exampleCheck1" }
                                      },
                                      [_vm._v("Terms")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-success",
                                        staticStyle: {
                                          "margin-left": "255px",
                                          width: "221px"
                                        },
                                        attrs: { type: "submit" }
                                      },
                                      [_vm._v("Update Manager")]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-tab", { attrs: { title: "Annoucement" } }, [
                    _c("div", { staticClass: "container-fluid" }, [
                      _c("div", { staticClass: "card shadow mb-4" }, [
                        _c("div", { staticClass: "card-header" }, [
                          _c("p", { staticClass: "text-center text-danger" }, [
                            _vm._v(
                              "This Module is under progress soon will be available"
                            )
                          ]),
                          _vm._v(" "),
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
                                _c("p", [_vm._v("Under Progress.")])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" }, [
                              _c("div", { attrs: { id: "talkbubble" } }, [
                                _c("span", { staticClass: "text-muted" }, [
                                  _vm._v("10:00 Am")
                                ]),
                                _vm._v(" "),
                                _c("p", [_vm._v("Under Progress.")])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" }, [
                              _c("div", { attrs: { id: "talkbubble" } }, [
                                _c("span", { staticClass: "text-muted" }, [
                                  _vm._v("10:00 Am")
                                ]),
                                _vm._v(" "),
                                _c("p", [_vm._v("Under Progress.")])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" }, [
                              _c("div", { attrs: { id: "talkbubble" } }, [
                                _c("span", { staticClass: "text-muted" }, [
                                  _vm._v("10:00 Am")
                                ]),
                                _vm._v(" "),
                                _c("p", [_vm._v("Under Progress.")])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
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
                                          {
                                            staticClass: "text-secondary mb-1"
                                          },
                                          [
                                            _vm._v(
                                              "Role: " +
                                                _vm._s(_vm.profile.role)
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "text-muted font-size-sm"
                                          },
                                          [
                                            _vm._v(
                                              "City: " +
                                                _vm._s(_vm.profile.cities)
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "form",
                                          {
                                            on: {
                                              submit: function($event) {
                                                $event.preventDefault()
                                                return _vm.searchInvoiceQuery(
                                                  $event
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "btn btn-outline-primary m-1"
                                              },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: _vm.q,
                                                      expression: "q"
                                                    }
                                                  ],
                                                  staticStyle: {
                                                    visibility: "hidden"
                                                  },
                                                  attrs: {
                                                    type: "radio",
                                                    value: "engaged",
                                                    id: "value1"
                                                  },
                                                  domProps: {
                                                    checked: _vm._q(
                                                      _vm.q,
                                                      "engaged"
                                                    )
                                                  },
                                                  on: {
                                                    change: [
                                                      function($event) {
                                                        _vm.q = "engaged"
                                                      },
                                                      function($event) {
                                                        return _vm.searchProperty()
                                                      }
                                                    ]
                                                  }
                                                }),
                                                _vm._v(
                                                  "Total Property:10\n                                                        "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "btn btn-outline-success  m-1"
                                              },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: _vm.q,
                                                      expression: "q"
                                                    }
                                                  ],
                                                  staticStyle: {
                                                    visibility: "hidden"
                                                  },
                                                  attrs: {
                                                    type: "radio",
                                                    value: "un-paid",
                                                    id: "value2"
                                                  },
                                                  domProps: {
                                                    checked: _vm._q(
                                                      _vm.q,
                                                      "un-paid"
                                                    )
                                                  },
                                                  on: {
                                                    change: [
                                                      function($event) {
                                                        _vm.q = "un-paid"
                                                      },
                                                      function($event) {
                                                        return _vm.searchProperty()
                                                      }
                                                    ]
                                                  }
                                                }),
                                                _vm._v(
                                                  "Un Paid Property:5\n                                                        "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "btn btn-outline-info m-1"
                                              },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: _vm.q,
                                                      expression: "q"
                                                    }
                                                  ],
                                                  staticStyle: {
                                                    visibility: "hidden"
                                                  },
                                                  attrs: {
                                                    type: "radio",
                                                    value: "paid",
                                                    id: "value3"
                                                  },
                                                  domProps: {
                                                    checked: _vm._q(
                                                      _vm.q,
                                                      "paid"
                                                    )
                                                  },
                                                  on: {
                                                    change: [
                                                      function($event) {
                                                        _vm.q = "paid"
                                                      },
                                                      function($event) {
                                                        return _vm.searchProperty()
                                                      }
                                                    ]
                                                  }
                                                }),
                                                _vm._v(
                                                  "Paid Property:5\n                                                        "
                                                )
                                              ]
                                            )
                                          ]
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
                                          return _vm.updateProfile($event)
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
                                                      accept:
                                                        ".png, .jpg, .jpeg"
                                                    },
                                                    on: {
                                                      change:
                                                        _vm.editAttachImageProfile
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("label", {
                                                    attrs: {
                                                      for: "imageUpload"
                                                    }
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
                                                  placeholder: "Your full name"
                                                },
                                                domProps: {
                                                  value: _vm.profile.name
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
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
                                                attrs: { type: "text" },
                                                domProps: {
                                                  value: _vm.profile.phone
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
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
                                                    if (
                                                      $event.target.composing
                                                    ) {
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
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.profile.cities,
                                                    expression: "profile.cities"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: { type: "text" },
                                                domProps: {
                                                  value: _vm.profile.cities
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.profile,
                                                      "cities",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ])
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "form",
                                    {
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return _vm.updateProfile($event)
                                        }
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "row" }, [
                                        _c("div", { staticClass: "col-md-2" }, [
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
                                        _c("div", { staticClass: "col-md-2" }, [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-success  p-1 d-block mx-auto mt-3",
                                              attrs: { type: "btn" }
                                            },
                                            [_vm._v("Change Pass")]
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
                                                        _vm.password
                                                          .new_password,
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
                                      _c(
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
                                                  name: "profile-admin",
                                                  params: {
                                                    id: property.user_id
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c("td", [
                                                _vm._v(_vm._s(property.name))
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(property.phone))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(property.city_name))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(property.property_name)
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
                                                      name: "show-admin",
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
                                                        "btn btn-info btn-sm",
                                                      attrs: { type: "button" }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-eye",
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
                                        ],
                                        1
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
                                      value: _vm.moreExistsProperties,
                                      expression: "moreExistsProperties"
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
        "div",
        [
          _c(
            "b-modal",
            {
              ref: "managerModal",
              attrs: { "hide-footer": "", size: "lg", title: "Add Staff" }
            },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.createManager($event)
                    }
                  }
                },
                [
                  _vm.user.avatar.name
                    ? _c("div", [
                        _c("img", {
                          ref: "newAvaterImageDisplay",
                          staticStyle: {
                            width: "100px",
                            "border-radius": "50%",
                            "margin-top": "-10px",
                            "margin-left": "328px"
                          },
                          attrs: { src: "images/img_avatar.png", alt: "Avatar" }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlInput1" } },
                          [_vm._v("Full Name")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.name,
                              expression: "user.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "name",
                            placeholder: "Enter Full name"
                          },
                          domProps: { value: _vm.user.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.user, "name", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.name
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.name[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlInput1" } },
                          [_vm._v("Email")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.email,
                              expression: "user.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "email",
                            name: "email",
                            placeholder: "Enter Email"
                          },
                          domProps: { value: _vm.user.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.user, "email", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.email
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.email[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlInput1" } },
                          [_vm._v("Password")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.password,
                              expression: "user.password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            id: "password",
                            name: "password",
                            placeholder: "Enter Password"
                          },
                          domProps: { value: _vm.user.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.password
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.password[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlInput1" } },
                          [_vm._v("Confirm Password")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.password_confirmation,
                              expression: "user.password_confirmation"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "password_confirmation",
                            name: "password_confirmation",
                            placeholder: "Enter Confirm Password"
                          },
                          domProps: { value: _vm.user.password_confirmation },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "password_confirmation",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.password_confirmation
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(
                                _vm._s(_vm.errors.password_confirmation[0])
                              )
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "label",
                            { attrs: { for: "exampleFormControlInput1" } },
                            [_vm._v("Phone")]
                          ),
                          _vm._v(" "),
                          _c("input-mask", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              mask: "9999-9999999",
                              "mask-char": "",
                              id: "phone",
                              name: "phone",
                              placeholder: "Enter Phone Number"
                            },
                            model: {
                              value: _vm.user.phone,
                              callback: function($$v) {
                                _vm.$set(_vm.user, "phone", $$v)
                              },
                              expression: "user.phone"
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.phone
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(_vm._s(_vm.errors.phone[0]))
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlInput1" } },
                          [_vm._v("Select Role")]
                        ),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.role,
                                expression: "user.role"
                              }
                            ],
                            staticClass: "form-control",
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
                                  _vm.user,
                                  "role",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select Role")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "manager" } }, [
                              _vm._v("Manager")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "employee" } }, [
                              _vm._v("Employee")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "landloard" } }, [
                              _vm._v("landlord")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "renter" } }, [
                              _vm._v("Tenant")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "csr" } }, [
                              _vm._v("Customer Service Representative")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm.errors.role
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.role[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-6 col-sm-6 col-md-6" }, [
                      _c(
                        "label",
                        { attrs: { for: "exampleFormControlInput1" } },
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
                              value: _vm.user.city_id,
                              expression: "user.city_id"
                            }
                          ],
                          staticClass: "form-control",
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
                                _vm.user,
                                "city_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
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
                      _vm.errors.city_id
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(_vm._s(_vm.errors.city_id[0]))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-6 col-sm-6 col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlInput1" } },
                          [_vm._v("Avatar")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          ref: "avaterImage",
                          staticClass: "form-control",
                          attrs: { type: "file", name: "avatar", id: "Avatar" },
                          on: { change: _vm.attachImage }
                        }),
                        _vm._v(" "),
                        _vm.errors.avatar
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.avatar[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        staticStyle: { width: "300px", "margin-left": "69px" },
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Save Staff")]
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
              ref: "editManager",
              attrs: { "hide-footer": "", size: "lg", title: "Edit Manager" }
            },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updateUser($event)
                    }
                  }
                },
                [
                  _c("span", [
                    _c("img", {
                      ref: "editAvatarImageDisplay",
                      staticClass: "img-thumbnail",
                      staticStyle: {
                        width: "100px",
                        "border-radius": "50%",
                        "margin-top": "-10px",
                        "margin-left": "328px",
                        height: "100px"
                      },
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "storage/" +
                          _vm.editManagerData.avatar,
                        alt: "Image1"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlInput1" } },
                          [_vm._v("Full Name")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editManagerData.name,
                              expression: "editManagerData.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "name",
                            placeholder: "Enter Full name"
                          },
                          domProps: { value: _vm.editManagerData.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editManagerData,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.name
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.name[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlInput1" } },
                          [_vm._v("Email")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editManagerData.email,
                              expression: "editManagerData.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "email",
                            name: "email",
                            placeholder: "Enter Email"
                          },
                          domProps: { value: _vm.editManagerData.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editManagerData,
                                "email",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.email
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.email[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlInput1" } },
                          [_vm._v("Password")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editManagerData.password,
                              expression: "editManagerData.password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            id: "password",
                            name: "password",
                            placeholder: "Enter Password"
                          },
                          domProps: { value: _vm.editManagerData.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editManagerData,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.password
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.password[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlInput1" } },
                          [_vm._v("Confirm Password")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editManagerData.password_confirmation,
                              expression:
                                "editManagerData.password_confirmation"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            id: "password_confirmation",
                            name: "password_confirmation",
                            placeholder: "Enter Confirm Password"
                          },
                          domProps: {
                            value: _vm.editManagerData.password_confirmation
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editManagerData,
                                "password_confirmation",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.password_confirmation
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(
                                _vm._s(_vm.errors.password_confirmation[0])
                              )
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlInput1" } },
                          [_vm._v("Phone")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editManagerData.phone,
                              expression: "editManagerData.phone"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "phone",
                            name: "phone",
                            placeholder: "Enter Phone Number"
                          },
                          domProps: { value: _vm.editManagerData.phone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editManagerData,
                                "phone",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.phone
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.phone[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlInput1" } },
                          [_vm._v("Rule")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editManagerData.role,
                              expression: "editManagerData.role"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "role", name: "role" },
                          domProps: { value: _vm.editManagerData.role },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editManagerData,
                                "role",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.role
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.role[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlSelect1" } },
                          [_vm._v("Select your City")]
                        ),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.editManagerData.city_id,
                                expression: "editManagerData.city_id"
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
                                  _vm.editManagerData,
                                  "city_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          _vm._l(_vm.cities, function(city, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: city.id } },
                              [_vm._v(_vm._s(city.city_name))]
                            )
                          }),
                          0
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlInput1" } },
                          [_vm._v("Avatar")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          ref: "editAvatarImage",
                          staticClass: "form-control-file",
                          staticStyle: { width: "103%" },
                          attrs: {
                            type: "file",
                            id: "exampleFormControlFile1"
                          },
                          on: { change: _vm.editAttachImage }
                        }),
                        _vm._v(" "),
                        _vm.errors.avatar
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.avatar[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-check" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editManagerData.terms,
                          expression: "editManagerData.terms"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: { type: "checkbox", id: "exampleCheck1" },
                      domProps: {
                        checked: Array.isArray(_vm.editManagerData.terms)
                          ? _vm._i(_vm.editManagerData.terms, null) > -1
                          : _vm.editManagerData.terms
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.editManagerData.terms,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.editManagerData,
                                  "terms",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.editManagerData,
                                  "terms",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.editManagerData, "terms", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "form-check-label",
                        attrs: { for: "exampleCheck1" }
                      },
                      [_vm._v("Terms")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        staticStyle: { "margin-left": "255px", width: "221px" },
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Update Manager")]
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
        "b-modal",
        {
          ref: "editProperty",
          attrs: {
            id: "modal-lg",
            "hide-footer": "",
            size: "lg",
            title: "Update Details"
          }
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
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "label-title" }, [
                        _vm._v(
                          "\n                            Title for your Ad\n                            "
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
                          "\n                            Property Type\n                            "
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
                            _vm._v(_vm._s(_vm.errors.property_type[0]))
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
                                  return _vm.getSector()
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
                                [
                                  _vm._v(
                                    _vm._s(city.city_name) +
                                      "\n                                    "
                                  )
                                ]
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
                          "\n                                    Marital Status\n                                    "
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
                          "\n                                    Unit\n                                    "
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
                          "\n                                    Price\n                                    "
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
          ref: "updateRentModal",
          attrs: { "hide-footer": "", title: "Update Rent" }
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
                _c("div", { staticClass: "col-lg-12 col-md-12 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { attrs: { for: "exampleFormControlInput1" } },
                      [_vm._v("Rent Price")]
                    ),
                    _vm._v(" "),
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
                        id: "rent_price",
                        name: "rent_price",
                        placeholder: "Enter Property Rent"
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
                    }),
                    _vm._v(" "),
                    _vm.errors.rent_price
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.rent_price[0]))
                        ])
                      : _vm._e()
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("label", { attrs: { for: "exampleFormControlInput1" } }, [
                    _vm._v("Select Operator")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editPropertyData.operator,
                          expression: "editPropertyData.operator"
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
                            "operator",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select Operator")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "+" } }, [_vm._v(" + ")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "-" } }, [_vm._v(" - ")])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-12 col-md-12 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { attrs: { for: "exampleFormControlInput1" } },
                      [
                        _vm._v("Security Price "),
                        _c("span", { staticClass: "text-danger" })
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editPropertyData.security_price,
                          expression: "editPropertyData.security_price"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "rent_price",
                        name: "rent_price",
                        placeholder: "0"
                      },
                      domProps: { value: _vm.editPropertyData.security_price },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editPropertyData,
                            "security_price",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.rent_price
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.rent_price[0]))
                        ])
                      : _vm._e()
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-12 col-md-12 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { attrs: { for: "exampleFormControlInput1" } },
                      [_vm._v("Company Comession")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editPropertyData.company_commession,
                          expression: "editPropertyData.company_commession"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "rent_price",
                        name: "rent_price",
                        placeholder: "0"
                      },
                      domProps: {
                        value: _vm.editPropertyData.company_commession
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editPropertyData,
                            "company_commession",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.company_commession
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.company_commession[0]))
                        ])
                      : _vm._e()
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-12 col-md-12 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { attrs: { for: "exampleFormControlInput1" } },
                      [_vm._v("Paid Date")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editPropertyData.paid_date,
                          expression: "editPropertyData.paid_date"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "date",
                        id: "rent_price",
                        name: "rent_price"
                      },
                      domProps: { value: _vm.editPropertyData.paid_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editPropertyData,
                            "paid_date",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.paid_date
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.paid_date[0]))
                        ])
                      : _vm._e()
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    staticStyle: { width: "300px", "margin-left": "69px" },
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Update Rent")]
                )
              ])
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

/***/ "./resources/js/services/admin_new_service.js":
/*!****************************************************!*\
  !*** ./resources/js/services/admin_new_service.js ***!
  \****************************************************/
/*! exports provided: getProperty, loadProperty, createAreaManager, createAreaEmployee, deleteEmployee, getAreaManaer, getAreaEmployee, getAllLandloard, loadLandlords, getManager, getEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProperty", function() { return loadProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaManager", function() { return createAreaManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaEmployee", function() { return createAreaEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmployee", function() { return deleteEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaManaer", function() { return getAreaManaer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaEmployee", function() { return getAreaEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLandloard", function() { return getAllLandloard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLandlords", function() { return loadLandlords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManager", function() { return getManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployee", function() { return getEmployee; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
 // remove from Admin Dashboard

function getProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/properties');
}
function loadProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("properties?page=".concat(nextPage));
}
function createAreaManager(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/area_managers', data);
}
function createAreaEmployee(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/area_employees', data);
}
function deleteEmployee(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/area_employees/".concat(id));
}
function getAreaManaer() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/area_managers');
}
function getAreaEmployee() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/area_employees');
}
function getAllLandloard() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/show-all-landloard');
}
function loadLandlords(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("show-all-landloard?page=".concat(nextPage));
}
function getManager() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-managers');
}
function getEmployee() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-employees');
}

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

/***/ "./resources/js/services/properties_service.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/properties_service.js ***!
  \*****************************************************/
/*! exports provided: getProTypeData, getCity, getSectors, getSector, getSectorEmployee, getSectorUpdate, createProperty, getProperty, allPropertyRent, getAllProperties, getInvoiceData, getProperties, getUser, deleteProperty, updateProperty, assignProperty, getRules, loadProperty, loadReservedProperty, loadRule, approvedProperty, paidPropertyRent, PropertyOk, PropertyHot, reloadProperty, seenProperty, searchSector, searchProperty, ReservedProperty, suspendedProperty, getEngagedProperty, loadEngagedProperty, getpaidPropteryRent, loadPaidProperty, getUnpaidPropteryRent, loadUnPaidProperty, getManager, createAreaManager, getAreaManaer, getAreaManager, assignPropertyData, assignPropertyEmployee, assignPropertyToTenant, getEmployee, ReservationCancell, getManagerData */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignPropertyEmployee", function() { return assignPropertyEmployee; });
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
function assignPropertyEmployee(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/send-employee-admin', data);
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

/***/ "./resources/js/services/user_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/user_service.js ***!
  \***********************************************/
/*! exports provided: getUser, getCity, createManager, updateUser, deleteUser, searchUser, loadUser, approvedUser, getAllUser, getRenter, getLandloard, loadAllUser, createEmployee, getEmployee, getCsr, contactUs, getLandlord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCity", function() { return getCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createManager", function() { return createManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchUser", function() { return searchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approvedUser", function() { return approvedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUser", function() { return getAllUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRenter", function() { return getRenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLandloard", function() { return getLandloard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllUser", function() { return loadAllUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmployee", function() { return createEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployee", function() { return getEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCsr", function() { return getCsr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactUs", function() { return contactUs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLandlord", function() { return getLandlord; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function getUser() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/users');
}
function getCity() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/cities');
}
function createManager(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/users', data);
}
function updateUser(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().put("/users/".concat(id), data);
}
function deleteUser(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/users/".concat(id));
}
function searchUser(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/search-user', request);
}
function loadUser(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("users?page=".concat(nextPage));
}
function approvedUser(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/users/".concat(id));
}
function getAllUser() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/all-users');
}
function getRenter() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-renter');
}
function getLandloard() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-landloard');
}
function loadAllUser(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("all-users?page=".concat(nextPage));
}
function createEmployee(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/users', data);
}
function getEmployee() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-employee');
}
function getCsr() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-csr-account');
}
function contactUs(contact) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/contacts', contact);
}
function getLandlord(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/get-all-landlord-admin/".concat(id));
}

/***/ }),

/***/ "./resources/js/views/admin/AdminDashboard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/admin/AdminDashboard.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminDashboard_vue_vue_type_template_id_2a2585e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminDashboard.vue?vue&type=template&id=2a2585e4& */ "./resources/js/views/admin/AdminDashboard.vue?vue&type=template&id=2a2585e4&");
/* harmony import */ var _AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminDashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/AdminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AdminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminDashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/admin/AdminDashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminDashboard_vue_vue_type_template_id_2a2585e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminDashboard_vue_vue_type_template_id_2a2585e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/AdminDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/AdminDashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/AdminDashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/AdminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/AdminDashboard.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/admin/AdminDashboard.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/AdminDashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/admin/AdminDashboard.vue?vue&type=template&id=2a2585e4&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/admin/AdminDashboard.vue?vue&type=template&id=2a2585e4& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_2a2585e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=template&id=2a2585e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/AdminDashboard.vue?vue&type=template&id=2a2585e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_2a2585e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_2a2585e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);