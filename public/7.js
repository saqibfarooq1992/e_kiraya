(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Welcome.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Welcome.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/user/Header.vue */ "./resources/js/components/user/Header.vue");
/* harmony import */ var _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/user/Footer.vue */ "./resources/js/components/user/Footer.vue");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/main_service */ "./resources/js/services/main_service.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user_service */ "./resources/js/services/user_service.js");
/* harmony import */ var vue_spinner_src_RingLoader_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-spinner/src/RingLoader.vue */ "./node_modules/vue-spinner/src/RingLoader.vue");


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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Welcome",
  components: {
    Header: _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    RingLoader: vue_spinner_src_RingLoader_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: "welcome",
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
    var _ref;

    return _ref = {
      query: "",
      city: "",
      land_area: "",
      cities: [],
      sectors: [],
      headers: [],
      count: [],
      favourites: []
    }, _defineProperty(_ref, "city", 0), _defineProperty(_ref, "sector", 0), _defineProperty(_ref, "properties", []), _defineProperty(_ref, "populars", []), _defineProperty(_ref, "loading", true), _defineProperty(_ref, "color", true), _defineProperty(_ref, "size", true), _defineProperty(_ref, "reservation", {
      property_id: '',
      full_name: '',
      cnic: '',
      current_address: '',
      status: '',
      domicile: '',
      phone: ''
    }), _defineProperty(_ref, "contact", {
      name: '',
      email: '',
      subject: '',
      message: ''
    }), _defineProperty(_ref, "property", {
      renter: ''
    }), _defineProperty(_ref, "propertyData", {
      city: '',
      sector: '',
      property: ''
    }), _defineProperty(_ref, "protypes", []), _defineProperty(_ref, "moreExists", false), _defineProperty(_ref, "moreExistsSector", false), _defineProperty(_ref, "nextPage", 0), _defineProperty(_ref, "errors", {}), _defineProperty(_ref, "hotProperties", {}), _ref;
  },
  mounted: function mounted() {
    this.getHeader(); // this.getPropertyType();

    this.getProperty();
    this.getCity();
    this.getPopularProperties();
    this.getHotProperty();
  },
  methods: {
    myToggle: function myToggle() {
      $(".heart").click(function () {
        $(this).toggleClass('fa-heart-o');
        $(this).toggleClass('fa-heart');
      });
      $(".thumbs").click(function () {
        $(this).toggleClass('fa-thumbs-up');
        $(this).toggleClass('fa-heart-o-up');
      });
      $(".share").click(function () {
        $(this).toggleClass('fa-share-square');
        $(this).toggleClass('fa-share-square-o');
      });
    },
    getHeader: function () {
      var _getHeader = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["getHeader"]();

              case 3:
                response = _context.sent;
                this.headers = response.data;
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

      function getHeader() {
        return _getHeader.apply(this, arguments);
      }

      return getHeader;
    }(),
    // getPropertyType:async function() {
    //     try {
    //     const response = await MainService.getPropertyType();
    //     this.protypes = response.data;
    //     } catch (error) {
    //     this.flashMessage.error({
    //             message: 'Some error occurred!',
    //             time:5000
    //             });
    //     }
    // },
    getCity: function () {
      var _getCity = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["getCity"]();

              case 3:
                response = _context2.sent;
                this.cities = response.data;
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

      function getCity() {
        return _getCity.apply(this, arguments);
      }

      return getCity;
    }(),
    getSector: function () {
      var _getSector = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["getSector"]({
                  params: {
                    city_id: this.propertyData.city
                  }
                }).then(function (response) {
                  this.sectors = response.data; // if (response.data.current_page < response.data.last_page) {
                  // this.moreExistsSector = true;
                  // this.nextPage = response.data.current_page + 1;
                  // } else {
                  // this.moreExistsSector = false;
                  // }
                }.bind(this));

              case 3:
                response = _context3.sent;
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6]]);
      }));

      function getSector() {
        return _getSector.apply(this, arguments);
      }

      return getSector;
    }(),
    searchProperty: function () {
      var _searchProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var query, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                query = {
                  query: this.query,
                  city: this.propertyData.city,
                  sector: this.propertyData.sector
                };
                _context4.next = 4;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["searchProperty"](query);

              case 4:
                response = _context4.sent;
                this.properties = response.data;
                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.info({
                  message: "Sorry we have not this property yet but you can check other proprety by clicking search icon",
                  time: 10000
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 8]]);
      }));

      function searchProperty() {
        return _searchProperty.apply(this, arguments);
      }

      return searchProperty;
    }(),
    getProperty: function () {
      var _getProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["getProperty"]();

              case 3:
                response = _context5.sent;
                this.properties = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                this.loading = false;
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 9]]);
      }));

      function getProperty() {
        return _getProperty.apply(this, arguments);
      }

      return getProperty;
    }(),
    loadProperty: function () {
      var _loadProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["loadProperty"](this.nextPage);

              case 3:
                response = _context6.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this.properties.push(data);
                });
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred during load more properties",
                  time: 5000
                });

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));

      function loadProperty() {
        return _loadProperty.apply(this, arguments);
      }

      return loadProperty;
    }(),
    getHotProperty: function () {
      var _getHotProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["getHotProperty"]();

              case 3:
                response = _context7.sent;
                this.hotProperties = response.data;
                this.loading = false;
                _context7.next = 11;
                break;

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](0);
                this.flashMessage.error({
                  message: 'some error occured!',
                  time: 5000
                });

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 8]]);
      }));

      function getHotProperty() {
        return _getHotProperty.apply(this, arguments);
      }

      return getHotProperty;
    }(),
    getPopularProperties: function () {
      var _getPopularProperties = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["getPopularProperties"]();

              case 3:
                response = _context8.sent;
                this.populars = response.data;
                _context8.next = 10;
                break;

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 7]]);
      }));

      function getPopularProperties() {
        return _getPopularProperties.apply(this, arguments);
      }

      return getPopularProperties;
    }(),
    favourite: function () {
      var _favourite = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(item) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (this.$store.state.isLoggedIn) {
                  _context9.next = 3;
                  break;
                }

                this.$router.push('/login');
                return _context9.abrupt("return");

              case 3:
                _context9.prev = 3;
                _context9.next = 6;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["favourite"](item);

              case 6:
                response = _context9.sent;
                this.properties.map(function (properties) {
                  if (properties.id === item.id) {
                    properties.favorited = true;
                  }
                });
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.getProperty();
                _context9.next = 15;
                break;

              case 12:
                _context9.prev = 12;
                _context9.t0 = _context9["catch"](3);
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[3, 12]]);
      }));

      function favourite(_x) {
        return _favourite.apply(this, arguments);
      }

      return favourite;
    }(),
    hotFavourite: function () {
      var _hotFavourite = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(item) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (this.$store.state.isLoggedIn) {
                  _context10.next = 3;
                  break;
                }

                this.$router.push('/login');
                return _context10.abrupt("return");

              case 3:
                _context10.prev = 3;
                _context10.next = 6;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["hotFavourite"](item);

              case 6:
                response = _context10.sent;
                this.hotProperties.map(function (hotProperties) {
                  if (hotProperties.id === item.id) {
                    hotProperties.favorited = true;
                  }
                });
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.getHotProperty();
                _context10.next = 15;
                break;

              case 12:
                _context10.prev = 12;
                _context10.t0 = _context10["catch"](3);
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });

              case 15:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[3, 12]]);
      }));

      function hotFavourite(_x2) {
        return _hotFavourite.apply(this, arguments);
      }

      return hotFavourite;
    }(),
    unFavourite: function () {
      var _unFavourite = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(item) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (this.$store.state.isLoggedIn) {
                  _context11.next = 3;
                  break;
                }

                this.$router.push('/login');
                return _context11.abrupt("return");

              case 3:
                _context11.prev = 3;
                _context11.next = 6;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["unFavourite"](item);

              case 6:
                response = _context11.sent;
                this.properties.map(function (properties) {
                  if (properties.id === item.id) {
                    properties.favorited = false;
                  }
                });
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.getProperty();
                _context11.next = 15;
                break;

              case 12:
                _context11.prev = 12;
                _context11.t0 = _context11["catch"](3);
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });

              case 15:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[3, 12]]);
      }));

      function unFavourite(_x3) {
        return _unFavourite.apply(this, arguments);
      }

      return unFavourite;
    }(),
    hotUnFavourite: function () {
      var _hotUnFavourite = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(item) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (this.$store.state.isLoggedIn) {
                  _context12.next = 3;
                  break;
                }

                this.$router.push('/login');
                return _context12.abrupt("return");

              case 3:
                _context12.prev = 3;
                _context12.next = 6;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["hotUnFavourite"](item);

              case 6:
                response = _context12.sent;
                this.hotProperties.map(function (hotProperties) {
                  if (hotProperties.id === item.id) {
                    hotProperties.favorited = false;
                  }
                });
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.getHotProperty();
                _context12.next = 15;
                break;

              case 12:
                _context12.prev = 12;
                _context12.t0 = _context12["catch"](3);
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });

              case 15:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[3, 12]]);
      }));

      function hotUnFavourite(_x4) {
        return _hotUnFavourite.apply(this, arguments);
      }

      return hotUnFavourite;
    }(),
    like: function () {
      var _like = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(item) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (this.$store.state.isLoggedIn) {
                  _context13.next = 3;
                  break;
                }

                this.$router.push('/login');
                return _context13.abrupt("return");

              case 3:
                _context13.prev = 3;
                _context13.next = 6;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["like"](item);

              case 6:
                response = _context13.sent;
                this.properties.map(function (properties) {
                  if (properties.id === item.id) {
                    properties.liked = true;
                  }
                });
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.getProperty();
                this.getHotProperty();
                _context13.next = 16;
                break;

              case 13:
                _context13.prev = 13;
                _context13.t0 = _context13["catch"](3);
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });

              case 16:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[3, 13]]);
      }));

      function like(_x5) {
        return _like.apply(this, arguments);
      }

      return like;
    }(),
    hotlike: function () {
      var _hotlike = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(item) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (this.$store.state.isLoggedIn) {
                  _context14.next = 3;
                  break;
                }

                this.$router.push('/login');
                return _context14.abrupt("return");

              case 3:
                _context14.prev = 3;
                _context14.next = 6;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["like"](item);

              case 6:
                response = _context14.sent;
                this.hotProperties.map(function (hotProperties) {
                  if (hotProperties.id === item.id) {
                    hotProperties.liked = true;
                  }
                });
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.getHotProperty();
                _context14.next = 15;
                break;

              case 12:
                _context14.prev = 12;
                _context14.t0 = _context14["catch"](3);
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });

              case 15:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[3, 12]]);
      }));

      function hotlike(_x6) {
        return _hotlike.apply(this, arguments);
      }

      return hotlike;
    }(),
    unLike: function () {
      var _unLike = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(item) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (this.$store.state.isLoggedIn) {
                  _context15.next = 3;
                  break;
                }

                this.$router.push('/login');
                return _context15.abrupt("return");

              case 3:
                _context15.prev = 3;
                _context15.next = 6;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["unLike"](item);

              case 6:
                response = _context15.sent;
                this.properties.map(function (properties) {
                  if (properties.id === item.id) {
                    properties.liked = false;
                  }
                });
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.getProperty();
                _context15.next = 15;
                break;

              case 12:
                _context15.prev = 12;
                _context15.t0 = _context15["catch"](3);
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });

              case 15:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[3, 12]]);
      }));

      function unLike(_x7) {
        return _unLike.apply(this, arguments);
      }

      return unLike;
    }(),
    hotUnLike: function () {
      var _hotUnLike = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16(item) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                if (this.$store.state.isLoggedIn) {
                  _context16.next = 3;
                  break;
                }

                this.$router.push('/login');
                return _context16.abrupt("return");

              case 3:
                _context16.prev = 3;
                _context16.next = 6;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["hotUnLike"](item);

              case 6:
                response = _context16.sent;
                this.hotProperties.map(function (hotProperties) {
                  if (hotProperties.id === item.id) {
                    hotProperties.liked = false;
                  }
                });
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                _context16.next = 14;
                break;

              case 11:
                _context16.prev = 11;
                _context16.t0 = _context16["catch"](3);
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });

              case 14:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[3, 11]]);
      }));

      function hotUnLike(_x8) {
        return _hotUnLike.apply(this, arguments);
      }

      return hotUnLike;
    }(),
    visitedProperty: function () {
      var _visitedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17(item) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.prev = 0;
                _context17.next = 3;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["visitProperty"](item);

              case 3:
                response = _context17.sent;
                _context17.next = 9;
                break;

              case 6:
                _context17.prev = 6;
                _context17.t0 = _context17["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 9:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this, [[0, 6]]);
      }));

      function visitedProperty(_x9) {
        return _visitedProperty.apply(this, arguments);
      }

      return visitedProperty;
    }(),
    getTop: function () {
      var _getTop = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18(item) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (this.$store.state.isLoggedIn) {
                  _context18.next = 3;
                  break;
                }

                this.$router.push("/login");
                return _context18.abrupt("return");

              case 3:
                _context18.prev = 3;
                _context18.next = 6;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["getTop"](item);

              case 6:
                response = _context18.sent;
                this.properties.map(function (property) {
                  if (property.id === item.id) {
                    property.liked = false;
                  }
                });
                this.getProperty();
                _context18.next = 14;
                break;

              case 11:
                _context18.prev = 11;
                _context18.t0 = _context18["catch"](3);
                this.flashMessage.error({
                  message: "Some error occurred, Please try again!",
                  time: 5000
                });

              case 14:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this, [[3, 11]]);
      }));

      function getTop(_x10) {
        return _getTop.apply(this, arguments);
      }

      return getTop;
    }(),
    showModal: function showModal() {
      this.$refs.newModal.show();
    },
    showEmailModal: function showEmailModal() {
      this.$refs.newEmailModal.show();
    },
    created: function created() {
      this.getCity();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-spinner .v-ring\n{\n}\n.v-spinner .v-ring1\n{\n}\n.v-spinner .v-ring2\n{\n\n    -webkit-animation: v-ringRightRotate 2s 0s infinite linear;\n            animation: v-ringRightRotate 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    perspective: 800px;  \n    position: absolute;          \n    top: 0;\n    left: 0;\n}\n.v-spinner .v-ring3\n{\n\n    -webkit-animation: v-ringLeftRotate 2s 0s infinite linear;\n            animation: v-ringLeftRotate 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    perspective: 800px;            \n    position: absolute;\n    top: 0;\n    left: 0;\n}\n@-webkit-keyframes v-ringRightRotate\n{\n0%\n    {\n        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100%\n    {\n        transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n}\n}\n@keyframes v-ringRightRotate\n{\n0%\n    {\n        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100%\n    {\n        transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n}\n}\n@-webkit-keyframes v-ringLeftRotate\n{\n0%\n    {\n        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100%\n    {\n        transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n}\n}\n@keyframes v-ringLeftRotate\n{\n0%\n    {\n        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100%\n    {\n        transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Welcome.vue?vue&type=style&index=0&id=1ae8ae93&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Welcome.vue?vue&type=style&index=0&id=1ae8ae93&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#latestpropertyad[data-v-1ae8ae93]{\n    margin-top: 15px;\n}\n.postadcontent li[data-v-1ae8ae93]{\n            float: left;\n            padding-left:10px;\n            margin-top: 10px;\n}\n.postadcontent li i[data-v-1ae8ae93]\n            {\n            color:#2E86C1;\n}\n.adbackground[data-v-1ae8ae93]{\n            background-color: #2E86C1;\n            background-image: linear-gradient(to left,#85C1E9 ,#2874A6);\n}\n.popular-places p[data-v-1ae8ae93]{\n     font-size: 12px;\n     margin: 5px;\n}\n.popular-places p[data-v-1ae8ae93]:hover{\n color: green;\n}\n.featuredimg[data-v-1ae8ae93]{\n    height: 150px;\n    width: 100%;\n}\n.recentadimg[data-v-1ae8ae93]{\n    height: 160px;\n    width: 100%;\n}\n.popularadimg[data-v-1ae8ae93]{\n    height: 160px;\n    width: 100%;\n}\n.hotadimg[data-v-1ae8ae93]{\n    height: 160px;\n}\n.list2img[data-v-1ae8ae93]{\n    height: 200px;\n    width: 100%;\n}\n.list3img[data-v-1ae8ae93]{\n    height: 100px;\n    width: 100%;\n}\n.latestadimg[data-v-1ae8ae93]{\n    height: 218px;\n    width: 100%;\n}\n.latestadimg1[data-v-1ae8ae93]{\n           height: 111px;\n           widows: 100%;\n}\n.latestadimg2[data-v-1ae8ae93]{\n            height: 111px;\n            widows: 100%;\n}\n.banner[data-v-1ae8ae93]{\n            height: 400px;\n}\n@media (min-width: 1200px)\n{\n.container[data-v-1ae8ae93], .container-sm[data-v-1ae8ae93], .container-md[data-v-1ae8ae93], .container-lg[data-v-1ae8ae93], .container-xl[data-v-1ae8ae93] {\n      max-width: 1187px;\n}\n}\n.carousel .carousel-item a[data-v-1ae8ae93]{\n    color: black;\n}\n@media only screen and (max-width: 600px) {\n.map[data-v-1ae8ae93]{\n            padding: 0px;\n}\n.latestadimg[data-v-1ae8ae93]{\n            height: 150px !important;\n}\n.banner[data-v-1ae8ae93]{\n            height: 600px;\n}\n.latestadimg1[data-v-1ae8ae93]{\n            width: 85px !important;\n}\n.latestadimg2[data-v-1ae8ae93]{\n            width: 85px !important;\n}\n.latestnewsadcontact[data-v-1ae8ae93]{\n            font-size: 8px;\n}\n.latestnewsadreserve[data-v-1ae8ae93]{\n            font-size: 8px;\n}\n.latestadscontactno[data-v-1ae8ae93]{\n            font-size: 9px;\n}\n}\n@media only screen and (max-width: 767px) {\n.map[data-v-1ae8ae93]{\n            padding: 0px;\n}\n.latestadimg[data-v-1ae8ae93]{\n            height: 150px !important;\n}\n.latestadimg1[data-v-1ae8ae93]{\n            width: 90px !important;\n            height:90px;\n}\n.latestadimg2[data-v-1ae8ae93]{\n            width: 90px !important;\n            height:90px;\n}\n}\n@media only screen and (min-width: 768px) and (max-width:992px){\n.latestadimg[data-v-1ae8ae93]{\n              height:334px;\n}\n.latestadimg1[data-v-1ae8ae93]{\n              height:170px\n}\n.latestadimg2[data-v-1ae8ae93]{\n              height:170px;\n}\n#latestpropertyad[data-v-1ae8ae93]{\n        margin-top: 130px;\n}\n}\n#counter[data-v-1ae8ae93] {\n   background-color: #2E86C1;\n   background-image: linear-gradient(to left,#85C1E9 ,#2874A6);\n    color: #fff;\n    display: block;\n    overflow: hidden;\n    text-align: center;\n    padding: 30px 0;\n}\n#counter .count[data-v-1ae8ae93] {\n    padding: 50px;\n    background: rgba(255, 255, 255, 0.1);\n    color: #fff;\n    text-align: center;\n}\n.count h4[data-v-1ae8ae93] {\n    color: #fff;\n    font-size: 16px;\n    margin-top: 0;\n}\n#counter .count .fa[data-v-1ae8ae93] {\n    font-size: 40px;\n    display: block;\n    color: #fff;\n}\n#counter .number[data-v-1ae8ae93] {\n    font-size: 30px;\n    font-weight: 700;\n    margin: 0;\n}\n.dropdown-menu[data-v-1ae8ae93]{\n        position: absolute;\n    transform: translate3d(170px, 27px, 0px) !important;\n    top: 0px;\n    left: 0px;\n    will-change: transform;\n}\n#dropdown-menu1[data-v-1ae8ae93]{\n    position: absolute;\n    transform: translate3d(10px, 20px, 0px) !important;\n    top: 0px;\n    left: 0px;\n    will-change: transform;\n}\n#dropdown-menu2[data-v-1ae8ae93]{\n     position: absolute;\n    transform: translate3d(160px, 55px, 0px) !important;\n    top: 0px;\n    left: 0px;\n    will-change: transform;\n}\n.sharinghoticon[data-v-1ae8ae93]{\n    position: absolute;\n    top: 0px;\n    right: 0px;\n}\n.sharinghoticon i[data-v-1ae8ae93]{\n    color:#ffffff;\n    font-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!../../vue-loader/lib??vue-loader-options!./RingLoader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Welcome.vue?vue&type=style&index=0&id=1ae8ae93&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Welcome.vue?vue&type=style&index=0&id=1ae8ae93&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=style&index=0&id=1ae8ae93&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Welcome.vue?vue&type=style&index=0&id=1ae8ae93&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  
  name: 'RingLoader',

  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: { 
      type: String,
      default: '#5dc596'
    },
    size: {
      type: String,
      default: '60px'
    },
    margin: {
      type: String,
      default: '2px'
    },
    radius: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    spinnerStyle () {
      return {
        height: this.size,
        width: this.size,
        border: parseFloat(this.size)/10 + 'px solid' + this.color,
        opacity: 0.4,
        borderRadius: this.radius
      }
    },
    spinnerBasicStyle () {
      return {
        height: this.size,
        width: this.size,
        position: 'relative'
      }
    }
  }

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=template&id=df077b9c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=template&id=df077b9c& ***!
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
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.loading,
          expression: "loading"
        }
      ],
      staticClass: "v-spinner"
    },
    [
      _c(
        "div",
        { staticClass: "v-ring v-ring1", style: _vm.spinnerBasicStyle },
        [
          _c("div", { staticClass: "v-ring v-ring2", style: _vm.spinnerStyle }),
          _c("div", { staticClass: "v-ring v-ring3", style: _vm.spinnerStyle })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _c("section", { staticClass: "banner" }, [
        _c("div", { staticClass: "banner-img" }, [
          _c("img", {
            attrs: {
              src:
                _vm.$store.state.serverPath + "storage/" + _vm.headers.benner,
              alt: ""
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "banner-content" }, [
          _c("div", [
            _c("h1", [_vm._v("House for rent")]),
            _vm._v(" "),
            _c("h2", [_vm._v("Your Dream Property Awaits You!")]),
            _vm._v(" "),
            _c("h5", [
              _vm._v("ONLINE PAYMENT SOLUTION FOR LANDLORDS AND TENANTS")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "searchsection" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.searchProperty($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-3 px-1" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.propertyData.city,
                                expression: "propertyData.city"
                              }
                            ],
                            staticClass:
                              "browser-default form-control custom-select custom-select-lg",
                            attrs: { id: "searchborder" },
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
                                    _vm.propertyData,
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
                              {
                                staticStyle: { "font-size": "15px" },
                                attrs: { value: "" }
                              },
                              [_vm._v("Select city")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.cities, function(city, index) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  staticStyle: { "font-size": "15px" },
                                  domProps: { value: city.id }
                                },
                                [_vm._v(_vm._s(city.city_name))]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 px-1" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.propertyData.sector,
                                expression: "propertyData.sector"
                              }
                            ],
                            staticClass:
                              "browser-default form-control custom-select custom-select-lg",
                            attrs: { id: "searchborder" },
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
                                    _vm.propertyData,
                                    "sector",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
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
                              {
                                staticStyle: { "font-size": "15px" },
                                attrs: { value: "" }
                              },
                              [_vm._v("Select Land Area")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.sectors, function(sector, index) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  staticStyle: { "font-size": "15px" },
                                  domProps: { value: sector.id }
                                },
                                [_vm._v(_vm._s(sector.sector))]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4 px-1" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.query,
                              expression: "query"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder:
                              "Search Property (e.g: House for rent )",
                            id: "searchborder"
                          },
                          domProps: { value: _vm.query },
                          on: {
                            keyup: _vm.searchProperty,
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.query = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 d-block mx-auto" }, [
                      _c(
                        "button",
                        {
                          directives: [
                            {
                              name: "scroll-to",
                              rawName: "v-scroll-to",
                              value: "#searchresult",
                              expression: "'#searchresult'"
                            }
                          ],
                          staticClass: "btn btn-success btn-sm w-100",
                          attrs: { to: "#" }
                        },
                        [_c("i", { staticClass: "fa fa-search p-2" })]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _vm._m(0)
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "section featureds" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              {
                staticClass: "carousel slide carousel-multi-item",
                attrs: { id: "multi-item-example", "data-ride": "carousel" }
              },
              [
                _c(
                  "div",
                  { staticClass: "carousel-inner", attrs: { role: "listbox" } },
                  [
                    _c("div", { staticClass: "carousel-item active" }, [
                      _c(
                        "div",
                        { staticClass: "row" },
                        [
                          _c("ring-loader", {
                            staticClass: "mx-auto mt-5",
                            attrs: { loading: _vm.loading }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.hotProperties, function(hot, index) {
                            return _c(
                              "div",
                              { key: index, staticClass: "col-md-3" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "card mb-2 border-0" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: {
                                            name: "property-details",
                                            params: { slug: hot.slug }
                                          }
                                        }
                                      },
                                      [
                                        _c("img", {
                                          staticClass:
                                            "card-img-top w-100 featuredimg",
                                          attrs: {
                                            src:
                                              _vm.$store.state.serverPath +
                                              "storage/" +
                                              hot.pic1,
                                            alt: "Card image cap"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "card-body p-0" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "ad-info p-0" },
                                          [
                                            _c("div", [
                                              _c(
                                                "p",
                                                { staticClass: "item-title" },
                                                [
                                                  _c(
                                                    "router-link",
                                                    {
                                                      attrs: {
                                                        to: {
                                                          name:
                                                            "property-details",
                                                          params: {
                                                            slug: hot.slug
                                                          }
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm._f("snippet")(
                                                            hot.title
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "strong",
                                                { staticClass: "item-price" },
                                                [
                                                  _vm._v(
                                                    "Rs " +
                                                      _vm._s(hot.rent_price)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "sharinghoticon"
                                                },
                                                [
                                                  hot.favourited === true
                                                    ? _c(
                                                        "a",
                                                        {
                                                          attrs: {
                                                            "data-toggle":
                                                              "tooltip",
                                                            "data-placement":
                                                              "top",
                                                            title: "Favourite"
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fa fa-heart item-price pull-right heart",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.hotUnFavourite(
                                                                  hot
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    : _c(
                                                        "a",
                                                        {
                                                          attrs: {
                                                            "data-toggle":
                                                              "tooltip",
                                                            "data-placement":
                                                              "top",
                                                            title: "Favourite"
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fa fa-heart-o item-price pull-right heart",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.hotFavourite(
                                                                  hot
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      ),
                                                  _vm._v(" "),
                                                  hot.liked === true
                                                    ? _c(
                                                        "a",
                                                        {
                                                          attrs: {
                                                            "data-toggle":
                                                              "tooltip",
                                                            "data-placement":
                                                              "top",
                                                            title: "Like"
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fa fa-thumbs-up item-price pull-right thumbs",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.hotUnLike(
                                                                  hot
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    : _c(
                                                        "a",
                                                        {
                                                          attrs: {
                                                            "data-toggle":
                                                              "tooltip",
                                                            "data-placement":
                                                              "top",
                                                            title: "Like"
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fa fa-thumbs-o-up item-price pull-right thumbs",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.hotlike(
                                                                  hot
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      ),
                                                  _vm._v(" "),
                                                  _vm._m(2, true),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "dropdown-menu",
                                                      attrs: {
                                                        id: "sharedropdown"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "ShareNetwork",
                                                        {
                                                          attrs: {
                                                            network: "facebook",
                                                            url:
                                                              _vm.$store.state
                                                                .baseURL +
                                                              "property-details/" +
                                                              hot.slug,
                                                            title: "title",
                                                            description:
                                                              "description"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "dropdown-item",
                                                              attrs: {
                                                                href: "#"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Share on facebook"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "ShareNetwork",
                                                        {
                                                          attrs: {
                                                            network: "twitter",
                                                            url:
                                                              _vm.$store.state
                                                                .baseURL +
                                                              "property-details/" +
                                                              hot.slug,
                                                            title: "title",
                                                            description:
                                                              "description"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "dropdown-item",
                                                              attrs: {
                                                                href: "#"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Share on Twitter"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "ShareNetwork",
                                                        {
                                                          attrs: {
                                                            network: "linkedin",
                                                            url:
                                                              _vm.$store.state
                                                                .baseURL +
                                                              "property-details/" +
                                                              hot.slug,
                                                            title: "title",
                                                            description:
                                                              "description"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "dropdown-item",
                                                              attrs: {
                                                                href: "#"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Share on LinkedIn"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "ShareNetwork",
                                                        {
                                                          attrs: {
                                                            network: "whatsapp",
                                                            url:
                                                              _vm.$store.state
                                                                .baseURL +
                                                              "property-details/" +
                                                              hot.slug,
                                                            title: "title",
                                                            description:
                                                              "description"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "dropdown-item",
                                                              attrs: {
                                                                href: "#"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Share on Whatsapp"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "item-cat" },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "row" },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "col-md-5"
                                                      },
                                                      [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              hot.city_name
                                                            )
                                                          )
                                                        ])
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "col-md-7"
                                                      },
                                                      [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(hot.sector)
                                                          )
                                                        ])
                                                      ]
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
                                          {
                                            staticClass:
                                              "ad-meta d-table mx-auto"
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "meta-content" },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "dated pull-left hothidetab"
                                                  },
                                                  [
                                                    _c(
                                                      "a",
                                                      { attrs: { href: "#" } },
                                                      [
                                                        _vm._v(
                                                          _vm._s(hot.created_at)
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: " pull-right"
                                                  },
                                                  [
                                                    _c(
                                                      "router-link",
                                                      {
                                                        attrs: {
                                                          to: "/map",
                                                          "data-toggle":
                                                            "tooltip",
                                                          "data-placement":
                                                            "top",
                                                          title:
                                                            "Islamabad , Pakistan"
                                                        }
                                                      },
                                                      [
                                                        _c("img", {
                                                          attrs: {
                                                            src:
                                                              _vm.$store.state
                                                                .serverPath +
                                                              "images/map.png",
                                                            height:
                                                              "20px !important"
                                                          }
                                                        })
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "ad-section text-center",
              attrs: { id: "searchresult" }
            },
            [
              _c("router-link", { attrs: { to: "/advartisment-detail" } }, [
                _c("img", {
                  attrs: {
                    src:
                      _vm.$store.state.serverPath +
                      "images/project/project1.jpg",
                    alt: "Image",
                    height: "300px",
                    width: "100%"
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(3)
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "section trending-ads mt-4 bg-light" },
            [
              _vm._m(4),
              _vm._v(" "),
              _c("ring-loader", {
                staticClass: "mx-auto mt-5",
                attrs: { loading: _vm.loading }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "tab-content" }, [
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade in active show",
                    attrs: { role: "tabpanel", id: "recent-ads" }
                  },
                  [
                    _vm._l(_vm.properties, function(property, index) {
                      return _c(
                        "div",
                        { key: index, staticClass: "ad-item row" },
                        [
                          _c(
                            "div",
                            { staticClass: "item-image-box col-md-5 col-lg-3" },
                            [
                              _c(
                                "div",
                                { staticClass: "item-image" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "property-details",
                                          params: { slug: property.slug }
                                        }
                                      }
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "img-fluid recentadimg",
                                        attrs: {
                                          src:
                                            _vm.$store.state.serverPath +
                                            "storage/" +
                                            property.pic1,
                                          alt: "Image"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.visitedProperty(property)
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(5, true)
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "item-info col-md-7 col-lg-9" },
                            [
                              _c("div", { staticClass: "ad-info" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c(
                                      "h4",
                                      { staticClass: "item-title " },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: {
                                                name: "property-details",
                                                params: { slug: property.slug }
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("trendingsnippiet")(
                                                  property.title
                                                )
                                              ) + " "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-6" }, [
                                    property.favourited === true
                                      ? _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Favourite"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-heart item-price pull-right heart",
                                              on: {
                                                click: function($event) {
                                                  return _vm.unFavourite(
                                                    property
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      : _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Favourite"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-heart-o item-price pull-right heart",
                                              on: {
                                                click: function($event) {
                                                  return _vm.favourite(property)
                                                }
                                              }
                                            })
                                          ]
                                        ),
                                    _vm._v(" "),
                                    property.liked === true
                                      ? _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Like"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-thumbs-up item-price pull-right thumbs",
                                              on: {
                                                click: function($event) {
                                                  return _vm.unLike(property)
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      : _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Like"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-thumbs-o-up item-price pull-right thumbs",
                                              on: {
                                                click: function($event) {
                                                  return _vm.like(property)
                                                }
                                              }
                                            })
                                          ]
                                        ),
                                    _vm._v(" "),
                                    _vm._m(6, true),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "dropdown-menu",
                                        staticStyle: {
                                          transform:
                                            "translate3d(188px, 20px, 0px) !important"
                                        },
                                        attrs: {
                                          "aria-labelledby":
                                            "dropdownMenuButton1"
                                        }
                                      },
                                      [
                                        _c(
                                          "ShareNetwork",
                                          {
                                            attrs: {
                                              network: "facebook",
                                              url:
                                                _vm.$store.state.baseURL +
                                                "property-details/" +
                                                property.slug,
                                              title: "title",
                                              description: "description"
                                            }
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass: "dropdown-item",
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Share on facebook")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "ShareNetwork",
                                          {
                                            attrs: {
                                              network: "twitter",
                                              url:
                                                _vm.$store.state.baseURL +
                                                "property-details/" +
                                                property.slug,
                                              title: "title",
                                              description: "description"
                                            }
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass: "dropdown-item",
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Share on Twitter")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "ShareNetwork",
                                          {
                                            attrs: {
                                              network: "linkedin",
                                              url:
                                                _vm.$store.state.baseURL +
                                                "property-details/" +
                                                property.slug,
                                              title: "title",
                                              description: "description"
                                            }
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass: "dropdown-item",
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Share on LinkedIn")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "ShareNetwork",
                                          {
                                            attrs: {
                                              network: "whatsapp",
                                              url:
                                                _vm.$store.state.baseURL +
                                                "property-details/" +
                                                property.slug,
                                              title: "title",
                                              description: "description"
                                            }
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass: "dropdown-item",
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Share on Whatsapp")]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-md-4" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: {
                                            to: {
                                              name: "property-details",
                                              params: { slug: property.slug }
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "h3",
                                            { staticClass: "item-price" },
                                            [
                                              _vm._v(
                                                "RS." +
                                                  _vm._s(property.rent_price)
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "item-cat " }, [
                                        _c("span", [
                                          _c("a", { attrs: { href: "#" } }, [
                                            _vm._v(_vm._s(property.city_name))
                                          ])
                                        ]),
                                        _vm._v(
                                          " /\n                                                        "
                                        ),
                                        _c("span", [
                                          _c("a", { attrs: { href: "#" } }, [
                                            _vm._v(_vm._s(property.sector))
                                          ])
                                        ])
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-md-8" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: {
                                            to: {
                                              name: "property-details",
                                              params: { slug: property.slug }
                                            }
                                          }
                                        },
                                        [
                                          _c("p", {
                                            domProps: {
                                              innerHTML: _vm._s(
                                                property.description.length >=
                                                  180
                                                  ? property.description.substring(
                                                      0,
                                                      100
                                                    ) + "...read more"
                                                  : property.description
                                              )
                                            }
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _vm.$store.state.profile.role === "landloard"
                                ? _c("div", { staticClass: "ad-meta" }, [
                                    _c("div", { staticClass: "meta-content" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "tag",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.getTop(property)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-refresh",
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "right",
                                              title: "Refresh Property"
                                            }
                                          }),
                                          _vm._v("Reload")
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "user-option" },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: "/map",
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Islamabad , Pakistan"
                                            }
                                          },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src:
                                                  _vm.$store.state.serverPath +
                                                  "images/map.png",
                                                height: "20px !important"
                                              }
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                : _c("div", { staticClass: "ad-meta" }, [
                                    _c("div", { staticClass: "meta-content" }, [
                                      _c("a", [
                                        _vm._v(_vm._s(property.created_at))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "user-option  pull-right"
                                      },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: "/map",
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Islamabad , Pakistan"
                                            }
                                          },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src:
                                                  _vm.$store.state.serverPath +
                                                  "images/map.png",
                                                height: "20px !important"
                                              }
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                            ]
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("span", [
                      _c(
                        "div",
                        {
                          staticClass: "row shadow  pb-0",
                          attrs: { id: "latestpropertyad" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "adbackground p-1 w-100" },
                            [
                              _c(
                                "router-link",
                                { attrs: { to: "/advartisment-detail" } },
                                [
                                  _c("h3", { staticClass: "text-light" }, [
                                    _vm._v("DHA PHASE 1 Al-Hayat Towers")
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6 p-0" }, [
                            _c("img", {
                              staticClass: "latestadimg",
                              attrs: {
                                src:
                                  _vm.$store.state.serverPath +
                                  "images/bg/homead.jpg",
                                width: "100%",
                                alt: ""
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-2 p-0" }, [
                            _c("img", {
                              staticClass: " p-1 latestadimg1",
                              attrs: {
                                src:
                                  _vm.$store.state.serverPath +
                                  "images/bg/homead1.jpg",
                                height: "80px",
                                width: "100%",
                                alt: "ads1"
                              }
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "img-fluid p-1 latestadimg2",
                              attrs: {
                                src:
                                  _vm.$store.state.serverPath +
                                  "images/bg/homead2.jpg",
                                height: "80px",
                                width: "100%",
                                alt: "ads2"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-4" },
                            [
                              _c(
                                "H5",
                                {
                                  staticClass: "text-success text-center mt-2"
                                },
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: "/advartisment-detail" } },
                                    [_vm._v("DHA PHASE 1 Al-HAYAT TOWERS")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm._m(7),
                              _vm._v(" "),
                              _vm._m(8),
                              _vm._v(" "),
                              _c("div", { staticClass: "row  foradbtn" }, [
                                _vm._m(9),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-md-4 d-inline foradbtn2"
                                  },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-info latestnewsadreserve",
                                        on: { click: _vm.showModal }
                                      },
                                      [_vm._v("Reserve")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-md-4 d-inline foradbtn2"
                                  },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-success latestnewsadreserve",
                                        on: { click: _vm.showEmailModal }
                                      },
                                      [_vm._v("Email")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(10)
                              ]),
                              _vm._v(" "),
                              _vm._m(11)
                            ],
                            1
                          )
                        ]
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
                            _c("i", { staticClass: "fas fa-arrow-down" }),
                            _vm._v(
                              " Load More\n                                "
                            )
                          ]
                        )
                      ]
                    )
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    attrs: { role: "tabpanel", id: "popular" }
                  },
                  [
                    _vm._l(_vm.populars, function(popular, index) {
                      return _c(
                        "div",
                        { key: index, staticClass: "ad-item row" },
                        [
                          _c(
                            "div",
                            { staticClass: "item-image-box col-md-5 col-lg-3" },
                            [
                              _c("div", { staticClass: "item-image" }, [
                                _c("a", { attrs: { href: "details.html" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid popularadimg",
                                    attrs: {
                                      src:
                                        _vm.$store.state.serverPath +
                                        "storage/" +
                                        popular.pic1,
                                      alt: "Image"
                                    }
                                  })
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "item-info col-md-7 col-lg-9" },
                            [
                              _c("div", { staticClass: "ad-info" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c(
                                      "h4",
                                      { staticClass: "item-title" },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: {
                                                name: "property-details",
                                                params: { slug: popular.slug }
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("trendingsnippiet")(
                                                  popular.title
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c(
                                      "a",
                                      {
                                        attrs: {
                                          "data-toggle": "tooltip",
                                          "data-placement": "top",
                                          title: "Favourite"
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-heart item-price pull-right heart",
                                          on: {
                                            click: function($event) {
                                              return _vm.unFavourite(
                                                _vm.property
                                              )
                                            }
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._m(12, true),
                                    _vm._v(" "),
                                    _vm._m(13, true),
                                    _vm._v(" "),
                                    _vm._m(14, true)
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-md-4" },
                                    [
                                      _c("router-link", { attrs: { to: "" } }, [
                                        _c(
                                          "h3",
                                          { staticClass: "item-price" },
                                          [
                                            _vm._v(
                                              "RS." + _vm._s(popular.rent_price)
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "item-cat" }, [
                                        _c("span", [
                                          _c("a", { attrs: { href: "#" } }, [
                                            _vm._v(_vm._s(popular.city_name))
                                          ])
                                        ]),
                                        _vm._v(
                                          " /\n                                                        "
                                        ),
                                        _c("span", [
                                          _c("a", { attrs: { href: "#" } }, [
                                            _vm._v(_vm._s(popular.sector))
                                          ])
                                        ])
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-md-8" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: {
                                            to: {
                                              name: "property-details",
                                              params: { slug: popular.slug }
                                            }
                                          }
                                        },
                                        [
                                          _c("p", {
                                            domProps: {
                                              innerHTML: _vm._s(
                                                popular.description.length >=
                                                  135
                                                  ? popular.description.substring(
                                                      0,
                                                      100
                                                    ) + "...read more"
                                                  : popular.description
                                              )
                                            }
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _vm.$store.state.profile.role === "landloard"
                                ? _c("div", { staticClass: "ad-meta" }, [
                                    _c("div", { staticClass: "meta-content" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "tag",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.getTop(popular)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-refresh",
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "right",
                                              title: "Refresh Property"
                                            }
                                          }),
                                          _vm._v("Reload")
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "views mx-2" },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass: "fa fa-eye-slash",
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "right",
                                                title: "People Seen"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(popular.view_count) +
                                                  " Views"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "views mx-2" },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass: "fa fa-eye-slash",
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "right",
                                                title: "People Views",
                                                V: ""
                                              }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(popular.seen_count) +
                                                  " Seen"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "views mx-2" },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass: "fa fa-heart-o",
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "right",
                                                title: "People favourite"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    popular.favorite_count
                                                  ) +
                                                  " fav"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "views mx-2" },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass: "fa fa-thumbs-up",
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "right",
                                                title: "People Likes"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(popular.like_count) +
                                                  " Likes"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._m(15, true),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "views mx-2" },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass: "fa fa-ticket",
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "right",
                                                title: "People Raserved"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    popular.reserved_count
                                                  ) +
                                                  " Reserved"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "user-option" },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: "/map",
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Islamabad , Pakistan"
                                            }
                                          },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src:
                                                  _vm.$store.state.serverPath +
                                                  "images/map.png",
                                                height: "20px !important"
                                              }
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "ad-meta" }, [
                                _c("div", { staticClass: "meta-content" }, [
                                  _c("a", [_vm._v(_vm._s(popular.created_at))])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "user-option  pull-right" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: "/map",
                                          "data-toggle": "tooltip",
                                          "data-placement": "top",
                                          title: "Islamabad , Pakistan"
                                        }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src:
                                              _vm.$store.state.serverPath +
                                              "images/map.png",
                                            height: "20px !important"
                                          }
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    (_vm.property.id = "3")
                      ? _c(
                          "div",
                          {
                            staticClass: "row shadow ",
                            attrs: { id: "latestpropertyad" }
                          },
                          [
                            _vm._m(16),
                            _vm._v(" "),
                            _vm._m(17),
                            _vm._v(" "),
                            _vm._m(18),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-4" },
                              [
                                _c(
                                  "H5",
                                  {
                                    staticClass: "text-success text-center mt-2"
                                  },
                                  [_vm._v("DHA PHASE 1 Al-HAYAT TOWERS")]
                                ),
                                _vm._v(" "),
                                _vm._m(19),
                                _vm._v(" "),
                                _vm._m(20),
                                _vm._v(" "),
                                _vm._m(21),
                                _vm._v(" "),
                                _vm._m(22)
                              ],
                              1
                            )
                          ]
                        )
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    attrs: { role: "tabpanel", id: "hot-ads" }
                  },
                  [
                    _vm._l(_vm.properties, function(property, index) {
                      return _c(
                        "div",
                        { key: index, staticClass: "ad-item row" },
                        [
                          _c(
                            "div",
                            { staticClass: "item-image-box col-md-5 col-lg-3" },
                            [
                              _c("div", { staticClass: "item-image" }, [
                                _c("a", { attrs: { href: "details.html" } }, [
                                  _c("img", {
                                    staticClass: "img-fluid hotadimg",
                                    attrs: {
                                      src:
                                        _vm.$store.state.serverPath +
                                        "storage/" +
                                        property.pic1,
                                      alt: "Image"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _vm._m(23, true)
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "item-info col-md-7 col-lg-9" },
                            [
                              _c("div", { staticClass: "ad-info" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-md-6" },
                                    [
                                      _c("router-link", { attrs: { to: "" } }, [
                                        _c(
                                          "h3",
                                          { staticClass: "item-price" },
                                          [
                                            _vm._v(
                                              "RS." +
                                                _vm._s(property.rent_price)
                                            )
                                          ]
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-6" }, [
                                    property.favourited === true
                                      ? _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Favourite"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-heart item-price pull-right heart",
                                              on: {
                                                click: function($event) {
                                                  return _vm.unFavourite(
                                                    property
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      : _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Favourite"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-heart-o item-price pull-right heart",
                                              on: {
                                                click: function($event) {
                                                  return _vm.favourite(property)
                                                }
                                              }
                                            })
                                          ]
                                        ),
                                    _vm._v(" "),
                                    property.liked === true
                                      ? _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Like"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-thumbs-up item-price pull-right thumbs",
                                              on: {
                                                click: function($event) {
                                                  return _vm.unLike(property)
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      : _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Like"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-thumbs-o-up item-price pull-right thumbs",
                                              on: {
                                                click: function($event) {
                                                  return _vm.like(property)
                                                }
                                              }
                                            })
                                          ]
                                        ),
                                    _vm._v(" "),
                                    _vm._m(24, true),
                                    _vm._v(" "),
                                    _vm._m(25, true)
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-4" }, [
                                    _c(
                                      "h4",
                                      { staticClass: "item-title " },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: {
                                                name: "property-details",
                                                params: { slug: property.slug }
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("trendingsnippiet")(
                                                  property.title
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-md-8" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: {
                                            to: {
                                              name: "property-details",
                                              params: { slug: property.slug }
                                            }
                                          }
                                        },
                                        [
                                          _c("p", {
                                            domProps: {
                                              innerHTML: _vm._s(
                                                property.description.length >=
                                                  180
                                                  ? property.description.substring(
                                                      0,
                                                      100
                                                    )
                                                  : property.description
                                              )
                                            }
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "item-cat" }, [
                                  _c("span", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _vm._v(_vm._s(property.city_name))
                                    ])
                                  ]),
                                  _vm._v(" /\n\t\t\t\t\t\t\t\t\t\t\t\t"),
                                  _c("span", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _vm._v(_vm._s(property.sector))
                                    ])
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _vm.$store.state.profile.role === "landloard"
                                ? _c("div", { staticClass: "ad-meta" }, [
                                    _c("div", { staticClass: "meta-content" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "tag",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.getTop(property)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-refresh",
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "right",
                                              title: "Refresh Property"
                                            }
                                          }),
                                          _vm._v("Reload")
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "views mx-2" },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass: "fa fa-eye-slash",
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "right",
                                                title: "People Seen"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(property.view_count) +
                                                  " Views"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "views mx-2" },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass: "fa fa-eye-slash",
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "right",
                                                title: "People Views",
                                                V: ""
                                              }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(property.seen_count) +
                                                  " Seen"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "views mx-2" },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass: "fa fa-heart-o",
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "right",
                                                title: "People favourite"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    property.favorite_count
                                                  ) +
                                                  " fav"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "views mx-2" },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass: "fa fa-thumbs-up",
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "right",
                                                title: "People Likes"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(property.like_count) +
                                                  " Likes"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._m(26, true),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "views mx-2" },
                                        [
                                          _c(
                                            "i",
                                            {
                                              staticClass: "fa fa-ticket",
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "right",
                                                title: "People Raserved"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    property.reserved_count
                                                  ) +
                                                  " Reserved"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "user-option" },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: "/map",
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Islamabad , Pakistan"
                                            }
                                          },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src:
                                                  _vm.$store.state.serverPath +
                                                  "images/map.png",
                                                height: "20px !important"
                                              }
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "ad-meta" }, [
                                _c("div", { staticClass: "meta-content" }, [
                                  _c("a", [_vm._v(_vm._s(property.created_at))])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "user-option  pull-right" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: "/map",
                                          "data-toggle": "tooltip",
                                          "data-placement": "top",
                                          title: "Islamabad , Pakistan"
                                        }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src:
                                              _vm.$store.state.serverPath +
                                              "images/map.png",
                                            height: "20px !important"
                                          }
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "row shadow pb-2",
                        attrs: { id: "latestpropertyad" }
                      },
                      [
                        _vm._m(27),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 p-0" }, [
                          _c("img", {
                            staticClass: "latestadimg",
                            attrs: {
                              src:
                                _vm.$store.state.serverPath +
                                "images/bg/homead.jpg",
                              height: "220px",
                              width: "100%",
                              alt: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2 p-0" }, [
                          _c("img", {
                            staticClass: "img-fluid w-100 p-1 latestadimg1",
                            attrs: {
                              src:
                                _vm.$store.state.serverPath +
                                "images/bg/homead1.jpg",
                              alt: "ads1"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-fluid w-100 p-1 latestadimg2",
                            attrs: {
                              src:
                                _vm.$store.state.serverPath +
                                "images/bg/homead2.jpg",
                              alt: "ads2"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-4" },
                          [
                            _c(
                              "H5",
                              { staticClass: "text-success text-center mt-2" },
                              [_vm._v("DHA PHASE 1 Al-HAYAT TOWERS")]
                            ),
                            _vm._v(" "),
                            _vm._m(28),
                            _vm._v(" "),
                            _vm._m(29),
                            _vm._v(" "),
                            _vm._m(30)
                          ],
                          1
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
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    attrs: { role: "tabpanel", id: "list" }
                  },
                  [
                    _vm._l(_vm.properties, function(property, index) {
                      return _c(
                        "div",
                        { key: index, staticClass: "ad-item row" },
                        [
                          _c(
                            "div",
                            { staticClass: "item-image-box col-md-5 col-lg-3" },
                            [
                              _c("div", { staticClass: "item-image" }, [
                                _c("a", { attrs: { href: "details.html" } }, [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    staticStyle: {
                                      height: "150px",
                                      width: "150px",
                                      "border-radius": "50%"
                                    },
                                    attrs: {
                                      src:
                                        _vm.$store.state.serverPath +
                                        "storage/" +
                                        property.pic1,
                                      alt: "Image"
                                    }
                                  })
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "item-info col-md-7 col-lg-9" },
                            [
                              _c("div", { staticClass: "ad-info" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-md-6" },
                                    [
                                      _c("router-link", { attrs: { to: "" } }, [
                                        _c(
                                          "h3",
                                          { staticClass: "item-price" },
                                          [
                                            _vm._v(
                                              "RS." +
                                                _vm._s(property.rent_price)
                                            )
                                          ]
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-6" }, [
                                    property.favourited === true
                                      ? _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Favourite"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-heart item-price pull-right heart",
                                              on: {
                                                click: function($event) {
                                                  return _vm.unFavourite(
                                                    property
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      : _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Favourite"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-heart-o item-price pull-right heart",
                                              on: {
                                                click: function($event) {
                                                  return _vm.favourite(property)
                                                }
                                              }
                                            })
                                          ]
                                        ),
                                    _vm._v(" "),
                                    property.liked === true
                                      ? _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Like"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-thumbs-up item-price pull-right thumbs",
                                              on: {
                                                click: function($event) {
                                                  return _vm.unLike(property)
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      : _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Like"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-thumbs-o-up item-price pull-right thumbs",
                                              on: {
                                                click: function($event) {
                                                  return _vm.like(property)
                                                }
                                              }
                                            })
                                          ]
                                        ),
                                    _vm._v(" "),
                                    _vm._m(31, true),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "dropdown-menu",
                                        staticStyle: {
                                          transform:
                                            "translate3d(188px, 20px, 0px) !important"
                                        },
                                        attrs: {
                                          "aria-labelledby":
                                            "dropdownMenuButton1"
                                        }
                                      },
                                      [
                                        _c(
                                          "ShareNetwork",
                                          {
                                            staticClass: "text-center",
                                            attrs: {
                                              network: "facebook",
                                              url:
                                                _vm.$store.state.baseURL +
                                                "property-details/" +
                                                property.slug,
                                              title: "title",
                                              description: "description"
                                            }
                                          },
                                          [
                                            _c(
                                              "a",
                                              { staticClass: "dropdown-item" },
                                              [_vm._v("Share on facebook")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "ShareNetwork",
                                          {
                                            staticClass: "text-center",
                                            attrs: {
                                              network: "twitter",
                                              url:
                                                _vm.$store.state.baseURL +
                                                "property-details/" +
                                                property.slug,
                                              title: "title",
                                              description: "description"
                                            }
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass: "dropdown-item",
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Share on Twitter")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "ShareNetwork",
                                          {
                                            staticClass: "text-center",
                                            attrs: {
                                              network: "linkedin",
                                              url:
                                                _vm.$store.state.baseURL +
                                                "property-details/" +
                                                property.slug,
                                              title: "title",
                                              description: "description"
                                            }
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass: "dropdown-item",
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Share on LinkedIn")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "ShareNetwork",
                                          {
                                            staticClass: "text-center",
                                            attrs: {
                                              network: "whatsapp",
                                              url:
                                                _vm.$store.state.baseURL +
                                                "property-details/" +
                                                property.slug,
                                              title: "title",
                                              description: "description"
                                            }
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass: "dropdown-item",
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Share on Whatsapp")]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-3" }, [
                                    _c(
                                      "h4",
                                      { staticClass: "item-title " },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: {
                                                name: "property-details",
                                                params: { slug: property.slug }
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("trendingsnippiet")(
                                                  property.title
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-9" }, [
                                    _c(
                                      "p",
                                      {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            property.description.length >= 135
                                              ? property.description.substring(
                                                  0,
                                                  100
                                                )
                                              : property.description
                                          )
                                        }
                                      },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: {
                                                name: "property-details",
                                                params: { slug: property.slug }
                                              }
                                            }
                                          },
                                          [_vm._v("read more")]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "item-cat" }, [
                                  _c("span", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _vm._v(_vm._s(property.city_name))
                                    ])
                                  ]),
                                  _vm._v(" /\n\t\t\t\t\t\t\t\t\t\t\t\t"),
                                  _c("span", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _vm._v(_vm._s(property.sector))
                                    ])
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "ad-meta" }, [
                                _c("div", { staticClass: "meta-content" }, [
                                  _c("a", [_vm._v(_vm._s(property.created_at))])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "user-option  pull-right" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: "/map",
                                          "data-toggle": "tooltip",
                                          "data-placement": "top",
                                          title: "Islamabad , Pakistan"
                                        }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src:
                                              _vm.$store.state.serverPath +
                                              "images/map.png",
                                            height: "20px !important"
                                          }
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "row shadow pb-2",
                        attrs: { id: "latestpropertyad" }
                      },
                      [
                        _vm._m(32),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 p-0" }, [
                          _c("img", {
                            staticClass: "latestadimg",
                            attrs: {
                              src:
                                _vm.$store.state.serverPath +
                                "images/bg/homead.jpg",
                              height: "220px",
                              width: "100%",
                              alt: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2 p-0" }, [
                          _c("img", {
                            staticClass: "img-fluid w-100 p-1 latestadimg1",
                            attrs: {
                              src:
                                _vm.$store.state.serverPath +
                                "images/bg/homead1.jpg",
                              alt: "ads1"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-fluid w-100 p-1 latestadimg2",
                            attrs: {
                              src:
                                _vm.$store.state.serverPath +
                                "images/bg/homead2.jpg",
                              alt: "ads2"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm._m(33)
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
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    attrs: { role: "tabpanel", id: "list2" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _vm._l(_vm.properties, function(property, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "col-md-4" },
                            [
                              _c("div", { staticClass: "item-image" }, [
                                _c("a", { attrs: { href: "details.html" } }, [
                                  _c("img", {
                                    staticClass: "img-thumbnail list2img",
                                    attrs: {
                                      src:
                                        _vm.$store.state.serverPath +
                                        "storage/" +
                                        property.pic1,
                                      alt: "Image"
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "ad-info" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-md-6" },
                                    [
                                      _c("router-link", { attrs: { to: "" } }, [
                                        _c(
                                          "h3",
                                          { staticClass: "item-price" },
                                          [
                                            _vm._v(
                                              "RS." +
                                                _vm._s(property.rent_price)
                                            )
                                          ]
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-6" }, [
                                    property.favourited === true
                                      ? _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Favourite"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-heart item-price pull-right heart",
                                              on: {
                                                click: function($event) {
                                                  return _vm.unFavourite(
                                                    property
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      : _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Favourite"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-heart-o item-price pull-right heart",
                                              on: {
                                                click: function($event) {
                                                  return _vm.favourite(property)
                                                }
                                              }
                                            })
                                          ]
                                        ),
                                    _vm._v(" "),
                                    property.liked === true
                                      ? _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Like"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-thumbs-up item-price pull-right thumbs",
                                              on: {
                                                click: function($event) {
                                                  return _vm.unLike(property)
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      : _c(
                                          "a",
                                          {
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Like"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-thumbs-o-up item-price pull-right thumbs",
                                              on: {
                                                click: function($event) {
                                                  return _vm.like(property)
                                                }
                                              }
                                            })
                                          ]
                                        ),
                                    _vm._v(" "),
                                    _vm._m(34, true),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "dropdown-menu",
                                        staticStyle: {
                                          transform:
                                            "translate3d(188px, 20px, 0px) !important"
                                        },
                                        attrs: {
                                          "aria-labelledby":
                                            "dropdownMenuButton1"
                                        }
                                      },
                                      [
                                        _c(
                                          "ShareNetwork",
                                          {
                                            staticClass: "text-center",
                                            attrs: {
                                              network: "facebook",
                                              url:
                                                _vm.$store.state.baseURL +
                                                "property-details/" +
                                                property.slug,
                                              title: "title",
                                              description: "description"
                                            }
                                          },
                                          [
                                            _c(
                                              "a",
                                              { staticClass: "dropdown-item" },
                                              [_vm._v("Share on facebook")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "ShareNetwork",
                                          {
                                            staticClass: "text-center",
                                            attrs: {
                                              network: "twitter",
                                              url:
                                                _vm.$store.state.baseURL +
                                                "property-details/" +
                                                property.slug,
                                              title: "title",
                                              description: "description"
                                            }
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass: "dropdown-item",
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Share on Twitter")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "ShareNetwork",
                                          {
                                            staticClass: "text-center",
                                            attrs: {
                                              network: "linkedin",
                                              url:
                                                _vm.$store.state.baseURL +
                                                "property-details/" +
                                                property.slug,
                                              title: "title",
                                              description: "description"
                                            }
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass: "dropdown-item",
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Share on LinkedIn")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "ShareNetwork",
                                          {
                                            staticClass: "text-center",
                                            attrs: {
                                              network: "whatsapp",
                                              url:
                                                _vm.$store.state.baseURL +
                                                "property-details/" +
                                                property.slug,
                                              title: "title",
                                              description: "description"
                                            }
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass: "dropdown-item",
                                                attrs: { href: "#" }
                                              },
                                              [_vm._v("Share on Whatsapp")]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-12" }, [
                                    _c(
                                      "h4",
                                      { staticClass: "item-title " },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: {
                                                name: "property-details",
                                                params: { slug: property.slug }
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("trendingsnippiet")(
                                                  property.title
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "item-cat" }, [
                                  _c("span", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _vm._v(_vm._s(property.city_name))
                                    ])
                                  ]),
                                  _vm._v(
                                    " /\n                                                "
                                  ),
                                  _c("span", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _vm._v(_vm._s(property.sector))
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-md-12" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: {
                                            to: {
                                              name: "property-details",
                                              params: { slug: property.slug }
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "p",
                                            {
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  property.description.length >=
                                                    180
                                                    ? property.description.substring(
                                                        0,
                                                        180
                                                      ) + "...read more"
                                                    : property.description
                                                )
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            read more\n                                                        "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "ad-footer row mx-1 list2-icon pl-3 p-2"
                                },
                                [
                                  _vm._m(35, true),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "pull-right d-block ml-auto"
                                    },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: {
                                            to: "/map",
                                            "data-toggle": "tooltip",
                                            "data-placement": "top",
                                            title: "Islamabad , Pakistan"
                                          }
                                        },
                                        [
                                          _c("img", {
                                            attrs: {
                                              src: "images/map.png",
                                              height: "20px !important"
                                            }
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          )
                        }),
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
                              [_c("i", { staticClass: "fas fa-arrow-right" })]
                            )
                          ]
                        )
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "row shadow pb-2",
                        attrs: { id: "latestpropertyad" }
                      },
                      [
                        _vm._m(36),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 p-0" }, [
                          _c("img", {
                            staticClass: "latestadimg",
                            attrs: {
                              src:
                                _vm.$store.state.serverPath +
                                "images/bg/homead.jpg",
                              height: "220px",
                              width: "100%",
                              alt: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2 p-0" }, [
                          _c("img", {
                            staticClass: "img-fluid w-100 p-1 latestadimg1",
                            attrs: {
                              src:
                                _vm.$store.state.serverPath +
                                "images/bg/homead1.jpg",
                              alt: "ads1"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-fluid w-100 p-1 latestadimg2",
                            attrs: {
                              src:
                                _vm.$store.state.serverPath +
                                "images/bg/homead2.jpg",
                              alt: "ads2"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-4" },
                          [
                            _c(
                              "H5",
                              { staticClass: "text-success text-center mt-2" },
                              [_vm._v("DHA PHASE 1 Al-HAYAT TOWERS")]
                            ),
                            _vm._v(" "),
                            _vm._m(37),
                            _vm._v(" "),
                            _vm._m(38),
                            _vm._v(" "),
                            _vm._m(39),
                            _vm._v(" "),
                            _vm._m(40)
                          ],
                          1
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    attrs: { role: "tabpanel", id: "list3" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(_vm.properties, function(property, index) {
                        return _c(
                          "div",
                          { key: index, staticClass: "col-md-6" },
                          [
                            _c("div", { staticClass: "ad-item row" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "item-image-box col-md-5 col-lg-3"
                                },
                                [
                                  _c("div", { staticClass: "item-image" }, [
                                    _c(
                                      "a",
                                      { attrs: { href: "details.html" } },
                                      [
                                        _c("img", {
                                          staticClass: "img-thumbnail list3img",
                                          attrs: {
                                            src:
                                              _vm.$store.state.serverPath +
                                              "storage/" +
                                              property.pic1,
                                            alt: "Image"
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
                                { staticClass: "item-info col-md-7 col-lg-9" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "ad-info" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: {
                                            to: {
                                              name: "property-details",
                                              params: { slug: property.slug }
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "h3",
                                            { staticClass: "item-price" },
                                            [
                                              _vm._v(
                                                _vm._s(property.rent_price)
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      property.favourited === true
                                        ? _c(
                                            "a",
                                            {
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "top",
                                                title: "Favourite"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa fa-heart item-price pull-right heart",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.unFavourite(
                                                      property
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        : _c(
                                            "a",
                                            {
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "top",
                                                title: "Favourite"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa fa-heart-o item-price pull-right heart",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.favourite(
                                                      property
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          ),
                                      _vm._v(" "),
                                      property.liked === true
                                        ? _c(
                                            "a",
                                            {
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "top",
                                                title: "Like"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa fa-thumbs-up item-price pull-right thumbs",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.unLike(property)
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        : _c(
                                            "a",
                                            {
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "top",
                                                title: "Like"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa fa-thumbs-o-up item-price pull-right thumbs",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.like(property)
                                                  }
                                                }
                                              })
                                            ]
                                          ),
                                      _vm._v(" "),
                                      _vm._m(41, true),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-menu",
                                          staticStyle: {
                                            transform:
                                              "translate3d(188px, 20px, 0px) !important"
                                          },
                                          attrs: {
                                            "aria-labelledby":
                                              "dropdownMenuButton1"
                                          }
                                        },
                                        [
                                          _c(
                                            "ShareNetwork",
                                            {
                                              staticClass: "text-center",
                                              attrs: {
                                                network: "facebook",
                                                url:
                                                  _vm.$store.state.baseURL +
                                                  "property-details/" +
                                                  property.slug,
                                                title: "title",
                                                description: "description"
                                              }
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass: "dropdown-item"
                                                },
                                                [_vm._v("Share on facebook")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "ShareNetwork",
                                            {
                                              staticClass: "text-center",
                                              attrs: {
                                                network: "twitter",
                                                url:
                                                  _vm.$store.state.baseURL +
                                                  "property-details/" +
                                                  property.slug,
                                                title: "title",
                                                description: "description"
                                              }
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass: "dropdown-item",
                                                  attrs: { href: "#" }
                                                },
                                                [_vm._v("Share on Twitter")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "ShareNetwork",
                                            {
                                              staticClass: "text-center",
                                              attrs: {
                                                network: "linkedin",
                                                url:
                                                  _vm.$store.state.baseURL +
                                                  "property-details/" +
                                                  property.slug,
                                                title: "title",
                                                description: "description"
                                              }
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass: "dropdown-item",
                                                  attrs: { href: "#" }
                                                },
                                                [_vm._v("Share on LinkedIn")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "ShareNetwork",
                                            {
                                              staticClass: "text-center",
                                              attrs: {
                                                network: "whatsapp",
                                                url:
                                                  _vm.$store.state.baseURL +
                                                  "property-details/" +
                                                  property.slug,
                                                title: "title",
                                                description: "description"
                                              }
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass: "dropdown-item",
                                                  attrs: { href: "#" }
                                                },
                                                [_vm._v("Share on Whatsapp")]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "col-md-12" },
                                          [
                                            _c(
                                              "h4",
                                              { staticClass: "item-title " },
                                              [
                                                _c(
                                                  "router-link",
                                                  {
                                                    attrs: {
                                                      to: {
                                                        name:
                                                          "property-details",
                                                        params: {
                                                          slug: property.slug
                                                        }
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f(
                                                          "trendingsnippiet"
                                                        )(property.title)
                                                      )
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "item-cat" }, [
                                        _c("span", [
                                          _c("a", { attrs: { href: "#" } }, [
                                            _vm._v(_vm._s(property.city_name))
                                          ])
                                        ]),
                                        _vm._v(
                                          " /\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                        ),
                                        _c("span", [
                                          _c("a", { attrs: { href: "#" } }, [
                                            _vm._v(_vm._s(property.sector))
                                          ])
                                        ])
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "ad-meta" }, [
                                    _c("div", { staticClass: "meta-content" }, [
                                      _c("span", { staticClass: "dated" }, [
                                        _c("a", { attrs: { href: "#" } }, [
                                          _vm._v(
                                            _vm._s(property.created_at) + " "
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _vm._m(42, true)
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "user-option pull-right" },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: "/map",
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Islamabad , Pakistan"
                                            }
                                          },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src: "images/map.png",
                                                height: "20px !important"
                                              }
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ]
                              )
                            ])
                          ]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "row shadow ",
                        attrs: { id: "latestpropertyad" }
                      },
                      [
                        _vm._m(43),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 p-0" }, [
                          _c("img", {
                            staticClass: "latestadimg",
                            attrs: {
                              src:
                                _vm.$store.state.serverPath +
                                "images/bg/homead.jpg",
                              width: "100%",
                              alt: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2 p-0" }, [
                          _c("img", {
                            staticClass: "img-fluid w-100 p-1 latestadimg1",
                            attrs: {
                              src:
                                _vm.$store.state.serverPath +
                                "images/bg/homead1.jpg",
                              alt: "ads1"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-fluid w-100 p-1 latestadimg2",
                            attrs: {
                              src:
                                _vm.$store.state.serverPath +
                                "images/bg/homead2.jpg",
                              alt: "ads2"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-4" },
                          [
                            _c(
                              "H5",
                              { staticClass: "text-success text-center mt-2" },
                              [
                                _c(
                                  "router-link",
                                  { attrs: { to: "/ads-details" } },
                                  [_vm._v("DHA PHASE 1 Al-HAYAT TOWERS")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm._m(44),
                            _vm._v(" "),
                            _vm._m(45),
                            _vm._v(" "),
                            _vm._m(46),
                            _vm._v(" "),
                            _vm._m(47)
                          ],
                          1
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
                  ]
                )
              ])
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "sec-padding my-5", attrs: { id: "counter" } },
        [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-3 " },
                [
                  _c("router-link", { attrs: { to: "/advartisment-detail" } }, [
                    _c("div", { staticClass: "count" }, [
                      _c("span", { staticClass: "fa fa-television" }),
                      _vm._v(" "),
                      _c("p", { staticClass: "number" }, [_vm._v("777")]),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Total Ads")])
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-3 " },
                [
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("div", { staticClass: "count" }, [
                      _c("span", { staticClass: "fa fa-male" }),
                      _vm._v(" "),
                      _c("p", { staticClass: "number" }, [_vm._v("896")]),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Landlords")])
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-3 " },
                [
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("div", { staticClass: "count" }, [
                      _c("span", { staticClass: "fa fa-users" }),
                      _vm._v(" "),
                      _c("p", { staticClass: "number" }, [_vm._v("535")]),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Total Renter")])
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-3 " },
                [
                  _c("router-link", { attrs: { to: "/project" } }, [
                    _c("div", { staticClass: "count" }, [
                      _c("span", {
                        staticClass: "fa fa-trophy",
                        staticStyle: { color: "white" }
                      }),
                      _vm._v(" "),
                      _c("p", { staticClass: "number" }, [_vm._v("126")]),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Projects ")])
                    ])
                  ])
                ],
                1
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "popular-places" }, [
        _c("div", { staticClass: "container" }, [
          _c("h3", { staticClass: "text-center" }, [_vm._v("Popular Areas")]),
          _vm._v(" "),
          _c("div", { staticClass: "Islamabad text-muted" }, [
            _c("h4", [_vm._v("Islamabad")]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-4" },
                [
                  _c("h6", [_vm._v("Most Popular Locations for Houses")]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [
                      _vm._v(
                        "Houses for Rent in Bahria town (PHASE 1 - 6) (45)"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Houses for Rent in Bahria enclave(45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [
                      _vm._v("Houses for Rent in DHA (PHASE 1 - 2)(45)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Houses for Rent in Ghouri town(45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [
                      _vm._v("Houses for Rent in Media town (PHASE 1) (45)")
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-4" },
                [
                  _c("h6", [_vm._v("FLATS AND APARTMENTS")]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [
                      _vm._v("Flate for Rent in Bahria town (PHASE 1 - 6) (45)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Flate for Rent in Bahria enclave (45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [
                      _vm._v("Flate for Rent in DHA (PHASE 1 - 2) (45)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Flate for Rent in Ghouri town(45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [
                      _vm._v("Flate for Rent in Media town (PHASE 1) (45)")
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-4" },
                [
                  _c("h6", [_vm._v("Shops and Plaza,shooping center")]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [
                      _vm._v("Shops for Rent in Bahria town (PHASE 1 - 6) (45)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Shops for Rent in Bahria enclave(45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [
                      _vm._v("Shops for Rent in Bahria DHA (PHASE 1 - 6) (45)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Shops for Rent in Ghouri town (45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Shops for Rent in Media town (45)")])
                  ])
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "Rawalpindi text-muted" }, [
            _c("h4", [_vm._v("Rawalpindi")]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-4" },
                [
                  _c("h6", [_vm._v("Most Popular Locations for Houses")]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Houses for Rent in Bahria Town(45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Houses for Rent in Sattelite Town (45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Houses for Rent in 6th Road (45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Houses for Rent in 7th Road(45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Houses for Rent in Shamsa Abad(45)")])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-4" },
                [
                  _c("h6", [_vm._v("FLATS AND APARTMENTS")]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [
                      _vm._v("Flate for Rent in 6th Road (Block A)(45)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [
                      _vm._v("Flate for Rent in Shamsa Abad (Block B)(45)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Flate for Rent in Sadiq Abad(45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Flate for Rent in Commercial Market(45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [
                      _vm._v("Flate for Rent in Sattelite Town (Block D)(45)")
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-4" },
                [
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("h6", [_vm._v("Shops and Plaza,shooping center")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Shop for Rent in 6th Road (Block A)(45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Shop for Rent in Sadiq Abad(45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Shop for Rent in Commercial Market(45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [_vm._v("Plaza for Rent in Sattelite Town(45)")])
                  ]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/" } }, [
                    _c("p", [
                      _vm._v("shooping center for Rent in Shamsa Abad (45)")
                    ])
                  ])
                ],
                1
              )
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
              ref: "newModal",
              attrs: { "hide-footer": "", title: "Reservation Form" }
            },
            [
              _c(
                "form",
                {
                  staticClass: "p-3",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updateReservedProperty()
                    }
                  }
                },
                [
                  _c("fieldset", [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("div", { staticClass: " inputGroupContainer" }, [
                            _c("div", { staticClass: "input-group" }, [
                              _c("span", { staticClass: "input-group-addon" }, [
                                _c("i", {
                                  staticClass: "glyphicon glyphicon-home"
                                })
                              ]),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.reservation.domicile,
                                    expression: "reservation.domicile"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "Domicile",
                                  placeholder: "Domicile ",
                                  required: "true",
                                  type: "text"
                                },
                                domProps: { value: _vm.reservation.domicile },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.reservation,
                                      "domicile",
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
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("div", { staticClass: " inputGroupContainer" }, [
                            _c(
                              "div",
                              { staticClass: "input-group" },
                              [
                                _c(
                                  "span",
                                  { staticClass: "input-group-addon" },
                                  [
                                    _c("i", {
                                      staticClass: "glyphicon glyphicon-user"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("input-mask", {
                                  staticClass: "form-control",
                                  attrs: {
                                    mask: "99999-9999999-9",
                                    maskChar: "",
                                    name: "Cnic",
                                    placeholder: "Cnic",
                                    required: "true",
                                    type: "text"
                                  },
                                  model: {
                                    value: _vm.reservation.cnic,
                                    callback: function($$v) {
                                      _vm.$set(_vm.reservation, "cnic", $$v)
                                    },
                                    expression: "reservation.cnic"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("div", { staticClass: " inputGroupContainer" }, [
                            _c("div", { staticClass: "input-group" }, [
                              _c("span", { staticClass: "input-group-addon" }, [
                                _c("i", {
                                  staticClass: "glyphicon glyphicon-home"
                                })
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.reservation.current_address,
                                    expression: "reservation.current_address"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "addressLine1",
                                  placeholder: "Current Address",
                                  required: "true",
                                  type: "text"
                                },
                                domProps: {
                                  value: _vm.reservation.current_address
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.reservation,
                                      "current_address",
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
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group wrapper" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.reservation.status,
                                  expression: "reservation.status"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { required: "" },
                              on: {
                                change: function($event) {
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
                                    _vm.reservation,
                                    "status",
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
                                {
                                  staticClass: "w-100",
                                  attrs: {
                                    value: "",
                                    disabled: "",
                                    selected: "",
                                    hidden: ""
                                  }
                                },
                                [_vm._v(" Status")]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "bachelor" } }, [
                                _vm._v("Bachelor")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "family" } }, [
                                _vm._v("Family")
                              ])
                            ]
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    { staticClass: "btn btn-info", attrs: { type: "submit" } },
                    [_vm._v("Reserved Property")]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "newEmailModal",
              attrs: { "hide-footer": "", title: "Email Form" }
            },
            [
              _c(
                "form",
                {
                  staticClass: "contact-form",
                  attrs: { id: "contact-form" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.contactUs($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.contact.name,
                              expression: "contact.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            required: "required",
                            placeholder: "Name"
                          },
                          domProps: { value: _vm.contact.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.contact, "name", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.errors.name
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.errors.name[0]) +
                                "\n                                "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.contact.email,
                              expression: "contact.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            required: "required",
                            placeholder: "Email Id"
                          },
                          domProps: { value: _vm.contact.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.contact,
                                "email",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.errors.email
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.errors.email[0]) +
                                "\n                                "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.contact.subject,
                              expression: "contact.subject"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            required: "required",
                            placeholder: "Subject"
                          },
                          domProps: { value: _vm.contact.subject },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.contact,
                                "subject",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.errors.subject
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.errors.subject[0]) +
                                "\n                                "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.contact.message,
                              expression: "contact.message"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "message",
                            required: "required",
                            rows: "7",
                            placeholder: "Message"
                          },
                          domProps: { value: _vm.contact.message },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.contact,
                                "message",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.errors.subject
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.errors.message[0]) +
                                "\n                                "
                            )
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Submit Your Message")]
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
    return _c("ul", { staticClass: "banner-socail" }, [
      _c("li", [
        _c(
          "a",
          {
            attrs: {
              href: "https://www.facebook.com/rentpropertyatEKO",
              target: "_blank"
            }
          },
          [_c("i", { staticClass: "fa fa-facebook" })]
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            attrs: {
              href: "https://www.instagram.com/rentpropertyatEKO/",
              target: "_blank"
            }
          },
          [_c("i", { staticClass: "fa fa-instagram" })]
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            attrs: {
              href: "https://twitter.com/ekirayaonline",
              target: "_blank"
            }
          },
          [_c("i", { staticClass: "fa fa-twitter" })]
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { attrs: { href: "https://wa.me/923329793551", target: "_blank" } },
          [_c("i", { staticClass: "fa fa-whatsapp" })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12" }, [
        _c("div", { staticClass: "featured-top" }, [
          _c("h4", [_vm._v("Hot Properties")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        attrs: {
          "data-toggle": "dropdown",
          id: "dropdownMenuButton1",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          "data-placement": "top",
          title: "Share"
        }
      },
      [
        _c("i", {
          staticClass: "fa fa-share-square-o item-price pull-right share"
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "blink" }, [
      _c("button", { staticClass: "blinktext btn btn-info p-2" }, [
        _vm._v("Booking now:0321 1717555")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title tab-manu" }, [
      _c("h4", [_vm._v("Trending Properties updated")]),
      _vm._v(" "),
      _c("ul", { staticClass: "nav nav-tabs", attrs: { role: "tablist" } }, [
        _c("li", { attrs: { role: "presentation" } }, [
          _c(
            "a",
            {
              staticClass: "active",
              attrs: { href: "#recent-ads", "data-toggle": "tab" }
            },
            [_vm._v("Recent Properties")]
          )
        ]),
        _vm._v(" "),
        _c("li", { attrs: { role: "presentation" } }, [
          _c("a", { attrs: { href: "#popular", "data-toggle": "tab" } }, [
            _vm._v("Popular Properties")
          ])
        ]),
        _vm._v(" "),
        _c("li", { attrs: { role: "presentation" } }, [
          _c("a", { attrs: { href: "#hot-ads", "data-toggle": "tab" } }, [
            _vm._v("Hot Properties")
          ])
        ]),
        _vm._v(" "),
        _c("li", { attrs: { role: "presentation" } }, [
          _c("a", { attrs: { href: "#list", "data-toggle": "tab" } }, [
            _c("i", { staticClass: "fa fa-list" })
          ])
        ]),
        _vm._v(" "),
        _c("li", { attrs: { role: "presentation" } }, [
          _c("a", { attrs: { href: "#list2", "data-toggle": "tab" } }, [
            _c("i", { staticClass: "fa fa-list-alt" })
          ])
        ]),
        _vm._v(" "),
        _c("li", { attrs: { role: "presentation" } }, [
          _c("a", { attrs: { href: "#list3", "data-toggle": "tab" } }, [
            _c("i", {
              staticClass: "fa fa-sort-desc",
              attrs: { "aria-hidden": "true" }
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
    return _c(
      "a",
      {
        staticClass: "verified",
        attrs: {
          href: "#",
          "data-toggle": "tooltip",
          "data-placement": "left",
          title: "Verified"
        }
      },
      [_c("i", { staticClass: "fa fa-check-square-o" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        attrs: {
          "data-toggle": "dropdown",
          id: "dropdownMenuButton1",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          "data-placement": "top",
          title: "Share"
        }
      },
      [
        _c("i", {
          staticClass: "fa fa-share-square-o item-price pull-right share"
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "fa fa-bed pr-3" }, [_vm._v("3")]),
      _c("i", { staticClass: "fa fa-shower" }, [_vm._v("2")]),
      _c("strong", { staticClass: "float-right text-danger" }, [
        _c(
          "a",
          {
            attrs: {
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Police Verified"
            }
          },
          [_vm._v(" Verified")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "border p-1" }, [
      _c("strong", [_vm._v("Price:")]),
      _vm._v("30K to 49k Rupees")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4 d-inline foradbtn1" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-warning latestnewsadcontact",
          attrs: {
            "data-toggle": "collapse",
            href: "#latestproperty2",
            role: "button",
            "aria-expanded": "false",
            "aria-controls": "multiCollapseExample1"
          }
        },
        [_vm._v("Contact")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "collapse multi-collapse",
        attrs: { id: "latestproperty2" }
      },
      [
        _c(
          "a",
          {
            staticClass: "btn btn-outline-warning m-3 latestadscontactno border"
          },
          [_vm._v("Phone No:0322-1717555")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "postadcontent" }, [
      _c("ul", [
        _c("li", [
          _c("i", { staticClass: "fa fa-check-circle px-1" }),
          _vm._v(" Electricity")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "fa fa-check-circle px-1" }),
          _vm._v("Gas")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "fa fa-check-circle px-1" }),
          _vm._v("Water")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        attrs: {
          "data-toggle": "tooltip",
          "data-placement": "top",
          title: "Like"
        }
      },
      [
        _c("i", {
          staticClass: "fa fa-thumbs-o-up item-price pull-right thumbs"
        })
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
        attrs: {
          "data-toggle": "dropdown",
          id: "dropdownMenuButton1",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          "data-placement": "top",
          title: "Share"
        }
      },
      [
        _c("i", {
          staticClass: "fa fa-share-square-o item-price pull-right share"
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "dropdown-menu",
        staticStyle: { transform: "translate3d(188px, 20px, 0px) !important" },
        attrs: { "aria-labelledby": "dropdownMenuButton1" }
      },
      [
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("facebook")
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Twitter")
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Instagram")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "views mx-2" }, [
      _c(
        "i",
        {
          staticClass: "fa fa-share",
          attrs: {
            "data-toggle": "tooltip",
            "data-placement": "right",
            title: "People Share"
          }
        },
        [_vm._v("3 Share")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "adbackground p-1 w-100" }, [
      _c("h3", { staticClass: "text-light" }, [
        _vm._v("DHA PHASE 1 Al-Hayat Towers")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6 p-0" }, [
      _c("img", {
        staticClass: "latestadimg",
        attrs: { src: "images/bg/homead.jpg", width: "100%", alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 p-0" }, [
      _c("img", {
        staticClass: "img-fluid w-100 px-1 latestadimg1",
        attrs: { src: "images/bg/homead1.jpg", alt: "ads1" }
      }),
      _vm._v(" "),
      _c("img", {
        staticClass: "img-fluid w-100 p-1 latestadimg2",
        attrs: { src: "images/bg/homead2.jpg", alt: "ads2" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "fa fa-bed pr-3" }, [_vm._v("3")]),
      _c("i", { staticClass: "fa fa-shower" }, [_vm._v("2")]),
      _c("strong", { staticClass: "float-right text-danger" }, [
        _c(
          "a",
          {
            attrs: {
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Police Verified"
            }
          },
          [_vm._v(" Verified")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "border p-1" }, [
      _c("strong", [_vm._v("Price:")]),
      _vm._v("30K to 49k Rupees")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row d-inline-block foradbtn" }, [
      _c("div", { staticClass: "col-md-6 d-inline foradbtn1" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-warning latestnewsadcontact",
            attrs: {
              "data-toggle": "collapse",
              href: "#latestproperty2",
              role: "button",
              "aria-expanded": "false",
              "aria-controls": "multiCollapseExample1"
            }
          },
          [_c("i", { staticClass: "fa fa-phone" }), _vm._v("Contact")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6 d-inline foradbtn2" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-info latestnewsadreserve",
            attrs: { href: "" }
          },
          [_c("i", { staticClass: "fa fa-ticket" }), _vm._v("Reserve")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "collapse multi-collapse",
          attrs: { id: "latestproperty2" }
        },
        [
          _c(
            "a",
            {
              staticClass:
                "btn btn-outline-warning m-3 latestadscontactno border"
            },
            [_vm._v("Phone No:0303-78397647")]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "postadcontent" }, [
      _c("ul", [
        _c("li", [
          _c("i", { staticClass: "fa fa-check-circle px-1" }),
          _vm._v(" Electricity")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "fa fa-check-circle px-1" }),
          _vm._v("Gas")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "fa fa-check-circle px-1" }),
          _vm._v("Water")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "verified",
        attrs: {
          href: "#",
          "data-toggle": "tooltip",
          "data-placement": "left",
          title: "Verified"
        }
      },
      [_c("i", { staticClass: "fa fa-check-square-o" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        attrs: {
          "data-toggle": "dropdown",
          id: "dropdownMenuButton1",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          "data-placement": "top",
          title: "Share"
        }
      },
      [
        _c("i", {
          staticClass: "fa fa-share-square-o item-price pull-right share"
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "dropdown-menu",
        staticStyle: { transform: "translate3d(188px, 20px, 0px) !important" },
        attrs: { "aria-labelledby": "dropdownMenuButton1" }
      },
      [
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Share on facebook")
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Share on Twitter")
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Share on Instagram")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "views mx-2" }, [
      _c(
        "i",
        {
          staticClass: "fa fa-share",
          attrs: {
            "data-toggle": "tooltip",
            "data-placement": "right",
            title: "People Share"
          }
        },
        [_vm._v("3 Share")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "adbackground p-1 w-100" }, [
      _c("h3", { staticClass: "text-light" }, [
        _vm._v("DHA PHASE 1 Al-Hayat Towers")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "fa fa-bed pr-3" }, [_vm._v("3")]),
      _c("i", { staticClass: "fa fa-shower" }, [_vm._v("2")]),
      _c("strong", { staticClass: "float-right text-danger" }, [
        _c(
          "a",
          {
            attrs: {
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Police Verified"
            }
          },
          [_vm._v(" Verified")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "border p-1" }, [
      _c("strong", [_vm._v("Price:")]),
      _vm._v("30K to 49k Rupees")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row d-inline-block foradbtn" }, [
      _c("div", { staticClass: "col-md-6 d-inline foradbtn1" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-warning latestnewsadcontact",
            attrs: {
              "data-toggle": "collapse",
              href: "#latestproperty2",
              role: "button",
              "aria-expanded": "false",
              "aria-controls": "multiCollapseExample1"
            }
          },
          [_c("i", { staticClass: "fa fa-phone" }), _vm._v("Contact")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6 d-inline foradbtn2" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-info latestnewsadreserve",
            attrs: { href: "" }
          },
          [_c("i", { staticClass: "fa fa-ticket" }), _vm._v("Reserve")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "collapse multi-collapse",
          attrs: { id: "latestproperty2" }
        },
        [
          _c(
            "a",
            {
              staticClass:
                "btn btn-outline-warning m-3 latestadscontactno border"
            },
            [_vm._v("Phone No:0303-78397647")]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        attrs: {
          "data-toggle": "dropdown",
          id: "dropdownMenuButton1",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          "data-placement": "top",
          title: "Share"
        }
      },
      [
        _c("i", {
          staticClass: "fa fa-share-square-o item-price pull-right share"
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "adbackground p-1 w-100" }, [
      _c("h3", { staticClass: "text-light" }, [
        _vm._v("DHA PHASE 1 Al-Hayat Towers")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("h5", { staticClass: "text-success text-center mt-2" }, [
        _vm._v("DHA PHASE 1 Al-HAYAT TOWERS")
      ]),
      _vm._v(" "),
      _c("p", [
        _c("i", { staticClass: "fa fa-bed pr-3" }, [_vm._v("3")]),
        _c("i", { staticClass: "fa fa-shower" }, [_vm._v("2")]),
        _c("strong", { staticClass: "float-right text-danger" }, [
          _c(
            "a",
            {
              attrs: {
                "data-toggle": "tooltip",
                "data-placement": "top",
                title: "Police Verified"
              }
            },
            [_vm._v(" Verified")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "border p-1" }, [
        _c("strong", [_vm._v("Price:")]),
        _vm._v("30K to 49k Rupees")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row d-inline-block foradbtn" }, [
        _c("div", { staticClass: "col-md-6 d-inline foradbtn1" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-warning latestnewsadcontact",
              attrs: {
                "data-toggle": "collapse",
                href: "#latestproperty2",
                role: "button",
                "aria-expanded": "false",
                "aria-controls": "multiCollapseExample1"
              }
            },
            [_c("i", { staticClass: "fa fa-phone" }), _vm._v("Contact")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 d-inline foradbtn2" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-info latestnewsadreserve",
              attrs: { href: "" }
            },
            [_c("i", { staticClass: "fa fa-ticket" }), _vm._v("Reserve")]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse multi-collapse",
            attrs: { id: "latestproperty2" }
          },
          [
            _c(
              "a",
              {
                staticClass:
                  "btn btn-outline-warning m-3 latestadscontactno border"
              },
              [_vm._v("Phone No:0303-78397647")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "postadcontent" }, [
        _c("ul", [
          _c("li", [
            _c("i", { staticClass: "fa fa-check-circle px-1" }),
            _vm._v(" Electricity")
          ]),
          _vm._v(" "),
          _c("li", [
            _c("i", { staticClass: "fa fa-check-circle px-1" }),
            _vm._v("Gas")
          ]),
          _vm._v(" "),
          _c("li", [
            _c("i", { staticClass: "fa fa-check-circle px-1" }),
            _vm._v("Water")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        attrs: {
          "data-toggle": "dropdown",
          id: "dropdownMenuButton1",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          "data-placement": "top",
          title: "Share"
        }
      },
      [
        _c("i", {
          staticClass: "fa fa-share-square-o item-price pull-right share"
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "views" }, [
      _c(
        "i",
        {
          staticClass: "fa fa-heart-o",
          attrs: {
            "data-toggle": "tooltip",
            "data-placement": "right",
            title: "People favourite"
          }
        },
        [_vm._v("3 fav")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "adbackground p-1 w-100" }, [
      _c("h3", { staticClass: "text-light" }, [
        _vm._v("DHA PHASE 1 Al-Hayat Towers")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "fa fa-bed pr-3" }, [_vm._v("3")]),
      _c("i", { staticClass: "fa fa-shower" }, [_vm._v("2")]),
      _c("strong", { staticClass: "float-right text-danger" }, [
        _c(
          "a",
          {
            attrs: {
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Police Verified"
            }
          },
          [_vm._v(" Verified")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "border p-1" }, [
      _c("strong", [_vm._v("Price:")]),
      _vm._v("30K to 49k Rupees")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row d-inline-block foradbtn" }, [
      _c("div", { staticClass: "col-md-6 d-inline foradbtn1" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-warning latestnewsadcontact",
            attrs: {
              "data-toggle": "collapse",
              href: "#latestproperty2",
              role: "button",
              "aria-expanded": "false",
              "aria-controls": "multiCollapseExample1"
            }
          },
          [_c("i", { staticClass: "fa fa-phone" }), _vm._v("Contact")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6 d-inline foradbtn2" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-info latestnewsadreserve",
            attrs: { href: "" }
          },
          [_c("i", { staticClass: "fa fa-ticket" }), _vm._v("Reserve")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "collapse multi-collapse",
          attrs: { id: "latestproperty2" }
        },
        [
          _c(
            "a",
            {
              staticClass:
                "btn btn-outline-warning m-3 latestadscontactno border"
            },
            [_vm._v("Phone No:0303-78397647")]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "postadcontent" }, [
      _c("ul", [
        _c("li", [
          _c("i", { staticClass: "fa fa-check-circle px-1" }),
          _vm._v(" Electricity")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "fa fa-check-circle px-1" }),
          _vm._v("Gas")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "fa fa-check-circle px-1" }),
          _vm._v("Water")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        attrs: {
          "data-toggle": "dropdown",
          id: "dropdownMenuButton1",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          "data-placement": "top",
          title: "Share"
        }
      },
      [
        _c("i", {
          staticClass: "fa fa-share-square-o item-price pull-right share"
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "views" }, [
      _c(
        "i",
        {
          staticClass: "fa fa-heart-o",
          attrs: {
            "data-toggle": "tooltip",
            "data-placement": "right",
            title: "People favourite"
          }
        },
        [_vm._v("3 fav")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "adbackground p-1 w-100" }, [
      _c("h3", { staticClass: "text-light" }, [
        _vm._v("DHA PHASE 1 Al-Hayat Towers")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "fa fa-bed pr-3" }, [_vm._v("3")]),
      _c("i", { staticClass: "fa fa-shower" }, [_vm._v("2")]),
      _c("strong", { staticClass: "float-right text-danger" }, [
        _c(
          "a",
          {
            attrs: {
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Police Verified"
            }
          },
          [_vm._v(" Verified")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "border p-1" }, [
      _c("strong", [_vm._v("Price:")]),
      _vm._v("30K to 49k Rupees")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row d-inline-block foradbtn" }, [
      _c("div", { staticClass: "col-md-6 d-inline foradbtn1" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-warning latestnewsadcontact",
            attrs: {
              "data-toggle": "collapse",
              href: "#latestproperty2",
              role: "button",
              "aria-expanded": "false",
              "aria-controls": "multiCollapseExample1"
            }
          },
          [_c("i", { staticClass: "fa fa-phone" }), _vm._v("Contact")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6 d-inline foradbtn2" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-info latestnewsadreserve",
            attrs: { href: "" }
          },
          [_c("i", { staticClass: "fa fa-ticket" }), _vm._v("Reserve")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "collapse multi-collapse",
          attrs: { id: "latestproperty2" }
        },
        [
          _c(
            "a",
            {
              staticClass:
                "btn btn-outline-warning m-3 latestadscontactno border"
            },
            [_vm._v("Phone No:0303-78397647")]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "postadcontent" }, [
      _c("ul", [
        _c("li", [
          _c("i", { staticClass: "fa fa-check-circle px-1" }),
          _vm._v(" Electricity")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "fa fa-check-circle px-1" }),
          _vm._v("Gas")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "fa fa-check-circle px-1" }),
          _vm._v("Water")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-spinner/src/RingLoader.vue":
/*!*****************************************************!*\
  !*** ./node_modules/vue-spinner/src/RingLoader.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RingLoader_vue_vue_type_template_id_df077b9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RingLoader.vue?vue&type=template&id=df077b9c& */ "./node_modules/vue-spinner/src/RingLoader.vue?vue&type=template&id=df077b9c&");
/* harmony import */ var _RingLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RingLoader.vue?vue&type=script&lang=js& */ "./node_modules/vue-spinner/src/RingLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RingLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RingLoader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RingLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RingLoader_vue_vue_type_template_id_df077b9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RingLoader_vue_vue_type_template_id_df077b9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-spinner/src/RingLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-spinner/src/RingLoader.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./node_modules/vue-spinner/src/RingLoader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib??vue-loader-options!./RingLoader.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!../../vue-loader/lib??vue-loader-options!./RingLoader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/vue-spinner/src/RingLoader.vue?vue&type=template&id=df077b9c&":
/*!************************************************************************************!*\
  !*** ./node_modules/vue-spinner/src/RingLoader.vue?vue&type=template&id=df077b9c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_template_id_df077b9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../vue-loader/lib??vue-loader-options!./RingLoader.vue?vue&type=template&id=df077b9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=template&id=df077b9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_template_id_df077b9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_template_id_df077b9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/Welcome.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Welcome.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Welcome_vue_vue_type_template_id_1ae8ae93_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true& */ "./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./resources/js/views/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Welcome_vue_vue_type_style_index_0_id_1ae8ae93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Welcome.vue?vue&type=style&index=0&id=1ae8ae93&scoped=true&lang=css& */ "./resources/js/views/Welcome.vue?vue&type=style&index=0&id=1ae8ae93&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Welcome_vue_vue_type_template_id_1ae8ae93_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Welcome_vue_vue_type_template_id_1ae8ae93_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ae8ae93",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Welcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Welcome.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Welcome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Welcome.vue?vue&type=style&index=0&id=1ae8ae93&scoped=true&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/Welcome.vue?vue&type=style&index=0&id=1ae8ae93&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_id_1ae8ae93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=style&index=0&id=1ae8ae93&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Welcome.vue?vue&type=style&index=0&id=1ae8ae93&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_id_1ae8ae93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_id_1ae8ae93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_id_1ae8ae93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_id_1ae8ae93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_1ae8ae93_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_1ae8ae93_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_1ae8ae93_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);