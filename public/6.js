(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth_service */ "./resources/js/services/auth_service.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/admin_service */ "./resources/js/services/admin_service.js");
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/properties_service */ "./resources/js/services/properties_service.js");
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/manager_service */ "./resources/js/services/manager_service.js");
/* harmony import */ var vue_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-avatar */ "./node_modules/vue-avatar/dist/vue-avatar.min.js");
/* harmony import */ var vue_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_avatar__WEBPACK_IMPORTED_MODULE_5__);


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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "navbar",
  components: {
    Avatar: vue_avatar__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  data: function data() {
    return {
      loaded: false,
      notifications: [],
      totals: [],
      comments: [],
      commented: [],
      properties: [],
      newProperty: [],
      appProCounts: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.$store.state.isLoading) {
      setTimeout(function () {
        _this.loaded = true;
      }, 1000);
    }

    this.getNotification();
    this.propertyCount();
    this.commentedPropertyCount();
    this.getCommentedProperty();
    this.getPropertyNotify();
    this.getApprovedPropertyNotification();
    this.getApprovedPropertyCount();
  },
  methods: {
    seenProperty: function () {
      var _seenProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(notification) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_3__["seenProperty"](notification.id);

              case 3:
                response = _context.sent;
                this.notifications = this.notifications.filter(function (obj) {
                  return obj.id != notification.id;
                });
                this.commentedPropertyCount();
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

      function seenProperty(_x) {
        return _seenProperty.apply(this, arguments);
      }

      return seenProperty;
    }(),
    logout: function () {
      var _logout = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["logout"]();

              case 2:
                this.$router.push('/login');

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function logout() {
        return _logout.apply(this, arguments);
      }

      return logout;
    }(),
    getNotification: function () {
      var _getNotification = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["getNotification"]();

              case 3:
                response = _context3.sent;
                this.notifications = response.data;
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 500
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function getNotification() {
        return _getNotification.apply(this, arguments);
      }

      return getNotification;
    }(),
    getApprovedPropertyCount: function () {
      var _getApprovedPropertyCount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["getApprovedPropertyCount"]();

              case 3:
                response = _context4.sent;
                this.appProCounts = response.data;
                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred!',
                  time: 500
                });

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function getApprovedPropertyCount() {
        return _getApprovedPropertyCount.apply(this, arguments);
      }

      return getApprovedPropertyCount;
    }(),
    getApprovedPropertyNotification: function () {
      var _getApprovedPropertyNotification = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["getApprovedPropertyNotification"]();

              case 3:
                response = _context5.sent;
                this.properties = response.data;
                _context5.next = 10;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 500
                });

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 7]]);
      }));

      function getApprovedPropertyNotification() {
        return _getApprovedPropertyNotification.apply(this, arguments);
      }

      return getApprovedPropertyNotification;
    }(),
    propertyCount: function () {
      var _propertyCount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["propertyCount"]();

              case 3:
                response = _context6.sent;
                this.totals = response.data;
                _context6.next = 10;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 500
                });

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 7]]);
      }));

      function propertyCount() {
        return _propertyCount.apply(this, arguments);
      }

      return propertyCount;
    }(),
    commentedPropertyCount: function () {
      var _commentedPropertyCount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _services_manager_service__WEBPACK_IMPORTED_MODULE_4__["commentedPropertyCount"]();

              case 3:
                response = _context7.sent;
                this.commented = response.data;
                _context7.next = 10;
                break;

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 500
                });

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 7]]);
      }));

      function commentedPropertyCount() {
        return _commentedPropertyCount.apply(this, arguments);
      }

      return commentedPropertyCount;
    }(),
    getCommentedProperty: function () {
      var _getCommentedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return _services_manager_service__WEBPACK_IMPORTED_MODULE_4__["getCommentedProperty"]();

              case 3:
                response = _context8.sent;
                this.comments = response.data;
                _context8.next = 10;
                break;

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 500
                });

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 7]]);
      }));

      function getCommentedProperty() {
        return _getCommentedProperty.apply(this, arguments);
      }

      return getCommentedProperty;
    }(),
    getPropertyNotify: function () {
      var _getPropertyNotify = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["getPropertyNotify"]();

              case 3:
                response = _context9.sent;
                this.newProperty = response.data;
                _context9.next = 10;
                break;

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 7]]);
      }));

      function getPropertyNotify() {
        return _getPropertyNotify.apply(this, arguments);
      }

      return getPropertyNotify;
    }(),
    toggleSidebar: function toggleSidebar() {
      document.getElementsByTagName('body')[0].classList.contains('sidebar-toggled') ? document.getElementsByTagName('body')[0].classList.remove('sidebar-toggled') : document.getElementsByTagName('body')[0].classList.add('sidebar-toggled');
      document.getElementById('accordionSidebar').classList.contains('toggled') ? document.getElementById('accordionSidebar').classList.remove('toggled') : document.getElementById('accordionSidebar').classList.add('toggled');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "sidebar",
  mounted: function mounted() {
    this.toggleSidebar();
  },
  methods: {
    toggleSidebar: function toggleSidebar() {
      document.getElementsByTagName("body")[0].classList.contains("sidebar-toggled") ? document.getElementsByTagName("body")[0].classList.remove("sidebar-toggled") : document.getElementsByTagName("body")[0].classList.add("sidebar-toggled");
      this.$refs.sidebar.classList.contains("toggled") ? this.$refs.sidebar.classList.remove("toggled") : this.$refs.sidebar.classList.add("toggled");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navbar.vue */ "./resources/js/components/Navbar.vue");
/* harmony import */ var _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Sidebar.vue */ "./resources/js/components/Sidebar.vue");
/* harmony import */ var _components_Footer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer.vue */ "./resources/js/components/Footer.vue");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth_service */ "./resources/js/services/auth_service.js");
//
//
//
//
//
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
  name: "dashboard",
  components: {
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Sidebar: _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _components_Footer_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  } // beforeCreate: async function() {
  // 	try {
  // 		if (auth.isLoggedIn()) {
  // 			const response = await auth.getProfile();
  // 			this.$store.dispatch("authenticate", response.data);
  // 		} else {
  // 			this.$router.push("/login");
  // 		}
  // 	} catch (error) {
  // 		auth.logout();
  // 	}
  // }

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=style&index=1&id=6dde423b&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=style&index=1&id=6dde423b&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dropdown-item.active[data-v-6dde423b], .dropdown-item[data-v-6dde423b]:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #f8f9fa;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=style&index=1&id=6dde423b&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=style&index=1&id=6dde423b&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=style&index=1&id=6dde423b&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=style&index=1&id=6dde423b&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374& ***!
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
  return _c("footer", { staticClass: "sticky-footer bg-white" }, [
    _c("div", { staticClass: "container my-auto" }, [
      _c("div", { staticClass: "copyright text-center my-auto" }, [
        _c(
          "a",
          {
            attrs: { href: "http://fazaltechnologies.com/", target: "_blank" }
          },
          [
            _c("span", [
              _vm._v(
                "Developed by © fazal technologies " +
                  _vm._s(new Date().getFullYear())
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "nav",
    {
      staticClass:
        "navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
    },
    [
      _c(
        "button",
        {
          staticClass: "btn btn-link d-md-none rounded-circlenav",
          attrs: { id: "sidebarToggleTop" },
          on: { click: _vm.toggleSidebar }
        },
        [_c("i", { staticClass: "fa fa-bars" })]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "d-sm-flex align-items-center justify-content-between mb-1"
        },
        [
          _c("h5", { staticClass: "mb-0 text-gray-800" }, [
            _vm._v(
              "Wellcome to " +
                _vm._s(_vm.$store.state.profile.role) +
                " Dashboard"
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("ul", { staticClass: "navbar-nav ml-auto" }, [
        _vm.$store.state.profile.role === "admin"
          ? _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle",
                  attrs: {
                    href: "#",
                    id: "alertsDropdown",
                    role: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-bell fa-fw" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "badge badge-danger badge-counter" },
                    [_vm._v(_vm._s(_vm.totals))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
                  attrs: { "aria-labelledby": "alertsDropdown" }
                },
                [
                  _c("h6", { staticClass: "dropdown-header" }, [
                    _vm._v("\n            New Property Alerts\n            ")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.notifications, function(notification, index) {
                    return _c(
                      "span",
                      { key: index },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center",
                            attrs: {
                              to: {
                                name: "show-admin",
                                params: { id: notification.id }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "mr-3" }, [
                              _c(
                                "div",
                                { staticClass: "icon-circle bg-primary" },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-file-alt text-white"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "small text-gray-500" },
                                [_vm._v(_vm._s(notification.created_at))]
                              ),
                              _vm._v(" "),
                              notification.new
                                ? _c(
                                    "span",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "font-weight-bold",
                                          attrs: {
                                            to: {
                                              name: "show-admin",
                                              params: { id: notification.id }
                                            }
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.seenProperty(
                                                notification
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(notification.title))]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "span",
                                { attrs: { else: "" } },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "show-admin",
                                          params: { id: notification.id }
                                        }
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.seenProperty(notification)
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(notification.title))]
                                  )
                                ],
                                1
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item text-center small text-gray-500",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Show All Alerts")]
                  )
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "topbar-divider d-none d-sm-block" }),
        _vm._v(" "),
        _vm.$store.state.profile.role === "admin"
          ? _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle",
                  attrs: {
                    href: "#",
                    id: "alertsDropdown",
                    role: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-bell fa-fw" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "badge badge-danger badge-counter" },
                    [_vm._v(_vm._s(_vm.commented))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
                  attrs: { "aria-labelledby": "alertsDropdown" }
                },
                [
                  _c("h6", { staticClass: "dropdown-header" }, [
                    _vm._v(
                      "\n                Commented Property Alerts For Manager\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.comments, function(comment, index) {
                    return _c(
                      "span",
                      { key: index },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center",
                            attrs: {
                              to: {
                                name: "show-all-property-notification",
                                params: { id: comment.id }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "mr-3" }, [
                              _c(
                                "div",
                                { staticClass: "icon-circle bg-primary" },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-file-alt text-white"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "small text-gray-500" },
                                [_vm._v(_vm._s(comment.created_at))]
                              ),
                              _vm._v(" "),
                              comment.new
                                ? _c("span", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "font-weight-bold",
                                        attrs: {
                                          href:
                                            "/property-details/" + comment.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.seenProperty(comment)
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(comment.title))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { attrs: { else: "" } }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: "/property-details/" + comment.id
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.seenProperty(comment)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(comment.title))]
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item text-center small text-gray-500",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Show All Alerts")]
                  )
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "topbar-divider d-none d-sm-block" }),
        _vm._v(" "),
        _vm.$store.state.profile.role === "employee"
          ? _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle",
                  attrs: {
                    href: "#",
                    id: "alertsDropdown",
                    role: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-bell fa-fw" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "badge badge-danger badge-counter" },
                    [_vm._v(_vm._s(_vm.totals))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
                  attrs: { "aria-labelledby": "alertsDropdown" }
                },
                [
                  _c("h6", { staticClass: "dropdown-header" }, [
                    _vm._v(
                      "\n            Reserved Property Alerts For Employee\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.notifications, function(notification, index) {
                    return _c(
                      "span",
                      { key: index },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center",
                            attrs: {
                              to: {
                                name: "property-details",
                                params: { slug: notification.slug }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "mr-3" }, [
                              _c(
                                "div",
                                { staticClass: "icon-circle bg-primary" },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-file-alt text-white"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "small text-gray-500" },
                                [_vm._v(_vm._s(notification.created_at))]
                              ),
                              _vm._v(" "),
                              notification.new
                                ? _c("span", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "font-weight-bold",
                                        attrs: {
                                          href:
                                            "/property-details/" +
                                            notification.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.seenProperty(
                                              notification
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(notification.title))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { attrs: { else: "" } }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "/property-details/" + notification.id
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.seenProperty(notification)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(notification.title))]
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item text-center small text-gray-500",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Show All Alerts")]
                  )
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.$store.state.profile.role === "admin"
          ? _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle",
                  attrs: {
                    href: "#",
                    id: "alertsDropdown",
                    role: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-bell fa-fw" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "badge badge-danger badge-counter" },
                    [_vm._v(_vm._s(_vm.appProCounts))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
                  attrs: { "aria-labelledby": "alertsDropdown" }
                },
                [
                  _c("h6", { staticClass: "dropdown-header" }, [
                    _vm._v(
                      "\n                    Approved Property Alerts For Employee\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.properties, function(property, index) {
                    return _c(
                      "span",
                      { key: index },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center",
                            attrs: {
                              to: {
                                name: "show-admin",
                                params: { id: property.slug }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "mr-3" }, [
                              _c(
                                "div",
                                { staticClass: "icon-circle bg-primary" },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-file-alt text-white"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "small text-gray-500" },
                                [_vm._v(_vm._s(property.created_at))]
                              ),
                              _vm._v(" "),
                              property.new
                                ? _c("span", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "font-weight-bold",
                                        attrs: {
                                          href:
                                            "/property-details/" + property.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.seenProperty(property)
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(property.title))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { attrs: { else: "" } }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: "/property-details/" + property.id
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.seenProperty(property)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(property.title))]
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item text-center small text-gray-500",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Show All Alerts")]
                  )
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.$store.state.profile.role === "landloard"
          ? _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle",
                  attrs: {
                    href: "#",
                    id: "alertsDropdown",
                    role: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-bell fa-fw" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "badge badge-danger badge-counter" },
                    [_vm._v(_vm._s(_vm.appProCounts))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
                  attrs: { "aria-labelledby": "alertsDropdown" }
                },
                [
                  _c("h6", { staticClass: "dropdown-header" }, [
                    _vm._v(
                      "\n                    Approved Property Alerts For Employee\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.properties, function(property, index) {
                    return _c(
                      "span",
                      { key: index },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center",
                            attrs: {
                              to: {
                                name: "show-admin",
                                params: { id: property.slug }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "mr-3" }, [
                              _c(
                                "div",
                                { staticClass: "icon-circle bg-primary" },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-file-alt text-white"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "small text-gray-500" },
                                [_vm._v(_vm._s(property.created_at))]
                              ),
                              _vm._v(" "),
                              property.new
                                ? _c("span", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "font-weight-bold",
                                        attrs: {
                                          href:
                                            "/property-details/" + property.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.seenProperty(property)
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(property.title))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { attrs: { else: "" } }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: "/property-details/" + property.id
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.seenProperty(property)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(property.title))]
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item text-center small text-gray-500",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Show All Alerts")]
                  )
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "topbar-divider d-none d-sm-block" }),
        _vm._v(" "),
        _vm.$store.state.profile.role === "employee"
          ? _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle",
                  attrs: {
                    href: "#",
                    id: "alertsDropdown",
                    role: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-bell fa-fw" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "badge badge-danger badge-counter" },
                    [_vm._v(_vm._s(_vm.commented))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
                  attrs: { "aria-labelledby": "alertsDropdown" }
                },
                [
                  _c("h6", { staticClass: "dropdown-header" }, [
                    _vm._v(
                      "\n            Commented Property Alerts For Employee\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.notifications, function(notification, index) {
                    return _c(
                      "span",
                      { key: index },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center",
                            attrs: {
                              to: {
                                name: "property-details",
                                params: { slug: notification.slug }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "mr-3" }, [
                              _c(
                                "div",
                                { staticClass: "icon-circle bg-primary" },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-file-alt text-white"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "small text-gray-500" },
                                [_vm._v(_vm._s(notification.created_at))]
                              ),
                              _vm._v(" "),
                              notification.new
                                ? _c("span", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "font-weight-bold",
                                        attrs: {
                                          href:
                                            "/property-details/" +
                                            notification.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.seenProperty(
                                              notification
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(notification.title))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { attrs: { else: "" } }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "/property-details/" + notification.id
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.seenProperty(notification)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(notification.title))]
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item text-center small text-gray-500",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Show All Alerts")]
                  )
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.$store.state.profile.role === "admin"
          ? _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle",
                  attrs: {
                    href: "#",
                    id: "alertsDropdown",
                    role: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-bell fa-fw" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "badge badge-danger badge-counter" },
                    [_vm._v(_vm._s(_vm.totals))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
                  attrs: { "aria-labelledby": "alertsDropdown" }
                },
                [
                  _c("h6", { staticClass: "dropdown-header" }, [
                    _vm._v(
                      "\n              Reserved Property Alerts For Employee\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.notifications, function(notification, index) {
                    return _c(
                      "span",
                      { key: index },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center",
                            attrs: {
                              to: {
                                name: "property-details",
                                params: { slug: notification.slug }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "mr-3" }, [
                              _c(
                                "div",
                                { staticClass: "icon-circle bg-primary" },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-file-alt text-white"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "small text-gray-500" },
                                [_vm._v(_vm._s(notification.created_at))]
                              ),
                              _vm._v(" "),
                              notification.new
                                ? _c("span", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "font-weight-bold",
                                        attrs: {
                                          href:
                                            "/property-details/" +
                                            notification.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.seenProperty(
                                              notification
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(notification.title))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { attrs: { else: "" } }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "/property-details/" + notification.id
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.seenProperty(notification)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(notification.title))]
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item text-center small text-gray-500",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Show All Alerts")]
                  )
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.$store.state.profile.role === "landloard"
          ? _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle",
                  attrs: {
                    href: "#",
                    id: "alertsDropdown",
                    role: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-bell fa-fw" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "badge badge-danger badge-counter" },
                    [_vm._v(_vm._s(_vm.totals))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
                  attrs: { "aria-labelledby": "alertsDropdown" }
                },
                [
                  _c("h6", { staticClass: "dropdown-header" }, [
                    _vm._v(
                      "\n              Reserved Property Alerts\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.notifications, function(notification, index) {
                    return _c(
                      "span",
                      { key: index },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center",
                            attrs: {
                              to: {
                                name: "property-details",
                                params: { slug: notification.slug }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "mr-3" }, [
                              _c(
                                "div",
                                { staticClass: "icon-circle bg-primary" },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-file-alt text-white"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "small text-gray-500" },
                                [_vm._v(_vm._s(notification.created_at))]
                              ),
                              _vm._v(" "),
                              notification.new
                                ? _c("span", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "font-weight-bold",
                                        attrs: {
                                          href:
                                            "/property-details/" +
                                            notification.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.seenProperty(
                                              notification
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(notification.title))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { attrs: { else: "" } }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "/property-details/" + notification.id
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.seenProperty(notification)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(notification.title))]
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item text-center small text-gray-500",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Show All Alerts")]
                  )
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.$store.state.profile.role === "csr"
          ? _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle",
                  attrs: {
                    href: "#",
                    id: "alertsDropdown",
                    role: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-bell fa-fw" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "badge badge-danger badge-counter" },
                    [_vm._v(_vm._s(_vm.totals))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
                  attrs: { "aria-labelledby": "alertsDropdown" }
                },
                [
                  _c("h6", { staticClass: "dropdown-header" }, [
                    _vm._v(
                      "\n            Reserved Property Alerts For Employee\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.notifications, function(notification, index) {
                    return _c(
                      "span",
                      { key: index },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center",
                            attrs: {
                              to: {
                                name: "property-details",
                                params: { slug: notification.slug }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "mr-3" }, [
                              _c(
                                "div",
                                { staticClass: "icon-circle bg-primary" },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-file-alt text-white"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "small text-gray-500" },
                                [_vm._v(_vm._s(notification.created_at))]
                              ),
                              _vm._v(" "),
                              notification.new
                                ? _c("span", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "font-weight-bold",
                                        attrs: {
                                          href:
                                            "/property-details/" +
                                            notification.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.seenProperty(
                                              notification
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(notification.title))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { attrs: { else: "" } }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "/property-details/" + notification.id
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.seenProperty(notification)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(notification.title))]
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item text-center small text-gray-500",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Show All Alerts")]
                  )
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.$store.state.profile.role === "manager"
          ? _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle",
                  attrs: {
                    href: "#",
                    id: "alertsDropdown",
                    role: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-bell fa-fw" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "badge badge-danger badge-counter" },
                    [_vm._v(_vm._s(_vm.commented))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
                  attrs: { "aria-labelledby": "alertsDropdown" }
                },
                [
                  _c("h6", { staticClass: "dropdown-header" }, [
                    _vm._v(
                      "\n              Commented Properties Notification\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.comments, function(comment, index) {
                    return _c(
                      "span",
                      { key: index },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center",
                            attrs: {
                              to: {
                                name: "show-all-property-notification",
                                params: { id: comment.id }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "mr-3" }, [
                              _c(
                                "div",
                                { staticClass: "icon-circle bg-primary" },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-file-alt text-white"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "small text-gray-500" },
                                [_vm._v(_vm._s(comment.created_at))]
                              ),
                              _vm._v(" "),
                              comment.new
                                ? _c("span", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "font-weight-bold",
                                        attrs: {
                                          href:
                                            "/property-details/" + comment.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.seenProperty(comment)
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(comment.title))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { attrs: { else: "" } }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: "/property-details/" + comment.id
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.seenProperty(comment)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(comment.title))]
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item text-center small text-gray-500",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Show All Alerts")]
                  )
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "topbar-divider d-none d-sm-block" }),
        _vm._v(" "),
        _vm.$store.state.profile.role === "landloard"
          ? _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle",
                  attrs: {
                    href: "#",
                    id: "alertsDropdown",
                    role: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-bell fa-fw" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "badge badge-danger badge-counter" },
                    [_vm._v(_vm._s(_vm.commented))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
                  attrs: { "aria-labelledby": "alertsDropdown" }
                },
                [
                  _c("h6", { staticClass: "dropdown-header" }, [
                    _vm._v("\n              Commented Property\n            ")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.notifications, function(notification, index) {
                    return _c(
                      "span",
                      { key: index },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center",
                            attrs: {
                              to: {
                                name: "property-details",
                                params: { slug: notification.slug }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "mr-3" }, [
                              _c(
                                "div",
                                { staticClass: "icon-circle bg-primary" },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-file-alt text-white"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "small text-gray-500" },
                                [_vm._v(_vm._s(notification.created_at))]
                              ),
                              _vm._v(" "),
                              notification.new
                                ? _c("span", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "font-weight-bold",
                                        attrs: {
                                          href:
                                            "/property-details/" +
                                            notification.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.seenProperty(
                                              notification
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(notification.title))]
                                    )
                                  ])
                                : _vm._e()
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item text-center small text-gray-500",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Show All Alerts")]
                  )
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.$store.state.profile.role === "csr"
          ? _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle",
                  attrs: {
                    href: "#",
                    id: "alertsDropdown",
                    role: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-bell fa-fw" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "badge badge-danger badge-counter" },
                    [_vm._v(_vm._s(_vm.totals))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
                  attrs: { "aria-labelledby": "alertsDropdown" }
                },
                [
                  _c("h6", { staticClass: "dropdown-header" }, [
                    _vm._v("\n              New Property Alerts \n            ")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.newProperty, function(newPro, index) {
                    return _c(
                      "span",
                      { key: index },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center",
                            attrs: {
                              to: {
                                name: "show-csr",
                                params: { slug: newPro.id }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "mr-3" }, [
                              _c(
                                "div",
                                { staticClass: "icon-circle bg-primary" },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-file-alt text-white"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "small text-gray-500" },
                                [_vm._v(_vm._s(newPro.created_at))]
                              ),
                              _vm._v(" "),
                              newPro.new
                                ? _c("span", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "font-weight-bold",
                                        attrs: {
                                          href:
                                            "/show-all-property-csr/" +
                                            newPro.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.seenProperty(newPro)
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(newPro.title))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { attrs: { else: "" } }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "/show-all-property-csr/" + newPro.id
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.seenProperty(newPro)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(newPro.title))]
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item text-center small text-gray-500",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Show All Alerts")]
                  )
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.$store.state.profile.role === "manager"
          ? _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle",
                  attrs: {
                    href: "#",
                    id: "alertsDropdown",
                    role: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-bell fa-fw" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "badge badge-danger badge-counter" },
                    [_vm._v(_vm._s(_vm.totals))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
                  attrs: { "aria-labelledby": "alertsDropdown" }
                },
                [
                  _c("h6", { staticClass: "dropdown-header" }, [
                    _vm._v(
                      "\n            Reserved Property Alerts For Employee\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.notifications, function(notification, index) {
                    return _c(
                      "span",
                      { key: index },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center",
                            attrs: {
                              to: {
                                name: "property-details",
                                params: { slug: notification.slug }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "mr-3" }, [
                              _c(
                                "div",
                                { staticClass: "icon-circle bg-primary" },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-file-alt text-white"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "small text-gray-500" },
                                [_vm._v(_vm._s(notification.created_at))]
                              ),
                              _vm._v(" "),
                              notification.new
                                ? _c("span", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "font-weight-bold",
                                        attrs: {
                                          href:
                                            "/property-details/" +
                                            notification.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.seenProperty(
                                              notification
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(notification.title))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { attrs: { else: "" } }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "/property-details/" + notification.id
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.seenProperty(notification)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(notification.title))]
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "dropdown-item text-center small text-gray-500",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Show All Alerts")]
                  )
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "topbar-divider d-none d-sm-block" }),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item dropdown no-arrow" }, [
          _c(
            "a",
            {
              staticClass: "nav-link dropdown-toggle",
              attrs: {
                href: "#",
                id: "userDropdown",
                role: "button",
                "data-toggle": "dropdown",
                "aria-haspopup": "true",
                "aria-expanded": "false"
              }
            },
            [
              _c(
                "span",
                { staticClass: "mr-2 d-none d-lg-inline text-gray-600 small" },
                [_vm._v(_vm._s(_vm.$store.state.profile.name))]
              ),
              _vm._v(" "),
              _vm.$store.state.profile
                ? _c("avatar", {
                    attrs: { username: _vm.$store.state.profile.name, size: 35 }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "dropdown-menu dropdown-menu-right shadow animated--grow-in",
              attrs: { "aria-labelledby": "userDropdown" }
            },
            [
              _c(
                "button",
                { staticClass: "dropdown-item", on: { click: _vm.logout } },
                [
                  _c("i", {
                    staticClass:
                      "fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                  }),
                  _vm._v("\n                Logout\n            ")
                ]
              )
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e& ***!
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
  return _c("div", [
    _vm.$store.state.profile.role === "admin"
      ? _c(
          "ul",
          {
            ref: "sidebar",
            staticClass:
              "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",
            attrs: { id: "accordionSidebar" }
          },
          [
            _c(
              "router-link",
              {
                staticClass:
                  "sidebar-brand d-flex align-items-center justify-content-center",
                attrs: { to: "/", exact: "" }
              },
              [
                _c("div", { staticClass: "sidebar-brand-icon " }, [
                  _c("img", {
                    staticStyle: { width: "93px" },
                    attrs: {
                      src: _vm.$store.state.serverPath + "images/eko.png",
                      alt: "Logo"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/admin", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-tachometer-alt" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Dashboard")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/add-ones-admin", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-folder" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Add on's")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/suspended", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-folder" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Suspended Property")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/admin-blogs", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-folder" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Blogs")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/add-property-admin", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-folder" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Add Property")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/subscriber", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-folder" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Subscriber")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/add-pages", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-folder" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Pages")])
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.$store.state.profile.role === "landloard"
      ? _c(
          "ul",
          {
            ref: "sidebar",
            staticClass:
              "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",
            attrs: { id: "accordionSidebar" }
          },
          [
            _c(
              "router-link",
              {
                staticClass:
                  "sidebar-brand d-flex align-items-center justify-content-center",
                attrs: { to: "/", exact: "" }
              },
              [
                _c("div", { staticClass: "sidebar-brand-icon " }, [
                  _c("img", {
                    staticStyle: { width: "93px" },
                    attrs: {
                      src: _vm.$store.state.serverPath + "images/eko.png",
                      alt: "Logo"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/landloard", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-tachometer-alt" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Dashboard")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/property-landlord", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-plus-circle" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Add Property")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/property-landlord", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-plus-circle" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Add Advartisment")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/Faqs", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-hands-helping" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Help / Support")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" })
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.$store.state.profile.role === "manager"
      ? _c(
          "ul",
          {
            ref: "sidebar",
            staticClass:
              "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",
            attrs: { id: "accordionSidebar" }
          },
          [
            _c(
              "router-link",
              {
                staticClass:
                  "sidebar-brand d-flex align-items-center justify-content-center",
                attrs: { to: "/", exact: "" }
              },
              [
                _c("div", { staticClass: "sidebar-brand-icon " }, [
                  _c("img", {
                    staticStyle: { width: "93px" },
                    attrs: {
                      src: _vm.$store.state.serverPath + "images/eko.png",
                      alt: "Logo"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/manager", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-tachometer-alt" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Dashboard")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/property", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-folder" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Add Property")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/assigned-property", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-folder" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Assigned Property")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/commented-property-manager", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-folder" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Commented Property")])
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.$store.state.profile.role === "employee"
      ? _c(
          "ul",
          {
            ref: "sidebar",
            staticClass:
              "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",
            attrs: { id: "accordionSidebar" }
          },
          [
            _c(
              "router-link",
              {
                staticClass:
                  "sidebar-brand d-flex align-items-center justify-content-center",
                attrs: { to: "/", exact: "" }
              },
              [
                _c("div", { staticClass: "sidebar-brand-icon " }, [
                  _c("img", {
                    staticStyle: { width: "93px" },
                    attrs: {
                      src: _vm.$store.state.serverPath + "images/eko.png",
                      alt: "Logo"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/employee", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-tachometer-alt" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Dashboard")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/property-employee", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-synagogue" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Add Property")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/commented-property", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-synagogue" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Commented Property")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/Faqs", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-hands-helping" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Help / Support")])
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.$store.state.profile.role === "tenant"
      ? _c(
          "ul",
          {
            ref: "sidebar",
            staticClass:
              "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",
            attrs: { id: "accordionSidebar" }
          },
          [
            _c(
              "router-link",
              {
                staticClass:
                  "sidebar-brand d-flex align-items-center justify-content-center",
                attrs: { to: "/", exact: "" }
              },
              [
                _c("div", { staticClass: "sidebar-brand-icon " }, [
                  _c("img", {
                    staticStyle: { width: "93px" },
                    attrs: {
                      src: _vm.$store.state.serverPath + "images/eko.png",
                      alt: "Logo"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/tenant", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-tachometer-alt" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Dashboard")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/Faqs", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-folder" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Help & Support")])
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.$store.state.profile.role === "csr"
      ? _c(
          "ul",
          {
            ref: "sidebar",
            staticClass:
              "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",
            attrs: { id: "accordionSidebar" }
          },
          [
            _c(
              "router-link",
              {
                staticClass:
                  "sidebar-brand d-flex align-items-center justify-content-center",
                attrs: { to: "/", exact: "" }
              },
              [
                _c("div", { staticClass: "sidebar-brand-icon " }, [
                  _c("img", {
                    staticStyle: { width: "93px" },
                    attrs: {
                      src: _vm.$store.state.serverPath + "images/eko.png",
                      alt: "Logo"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  { staticClass: "nav-link", attrs: { to: "/csr", exact: "" } },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-tachometer-alt" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Dashboard")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "sidebar-divider" }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: "/property-csr", exact: "" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-fw fa-folder" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Add Property")])
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \**************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "d-flex flex-grow-1" },
    [
      _c("Sidebar"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex flex-column", attrs: { id: "content-wrapper" } },
        [
          _c(
            "div",
            { attrs: { id: "content" } },
            [_c("Navbar"), _vm._v(" "), _c("router-view")],
            1
          ),
          _vm._v(" "),
          _c("Footer")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Footer.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Footer.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=61a7c374& */ "./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Footer.vue?vue&type=template&id=61a7c374& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=61a7c374& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Navbar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Navbar.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_6dde423b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=6dde423b&scoped=true& */ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&scoped=true&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Navbar_vue_vue_type_style_index_1_id_6dde423b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.vue?vue&type=style&index=1&id=6dde423b&scoped=true&lang=css& */ "./resources/js/components/Navbar.vue?vue&type=style&index=1&id=6dde423b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_6dde423b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_6dde423b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6dde423b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=style&index=1&id=6dde423b&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=style&index=1&id=6dde423b&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_1_id_6dde423b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=style&index=1&id=6dde423b&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=style&index=1&id=6dde423b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_1_id_6dde423b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_1_id_6dde423b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_1_id_6dde423b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_1_id_6dde423b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=6dde423b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Sidebar.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Sidebar.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=81fbb27e& */ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=81fbb27e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/services/manager_service.js":
/*!**************************************************!*\
  !*** ./resources/js/services/manager_service.js ***!
  \**************************************************/
/*! exports provided: getProperties, getNotification, getPendingCount, getApprovedPropertyCount, getPropertyCount, getPaidRent, getPaidRentProperty, getPenddingRent, getRunningProperty, getTotalRenterCount, getTotalLandloardCount, getTotalReservedCount, getTotalFavouritedCount, getTotalEmployeeCount, getTotalManagerCount, getTotalCSRCount, getApprovedProperty, loadProperty, commentedProperty, loadPendingProperty, loadApprovedProperty, getProperty, getAllRenter, getTotalRentCount, getAllLandloard, getAllRerservedProperty, getFavouritedCount, getPaidRentList, invoice, getPropertyCommented, loadCommentedProperty, updateAssignProperty, getPropertyManager, loadPropertyManager, getAllProperties, getPendingProperty, approvedProperty, getAllFavouritedProperty, commentedPropertyCount, getPenddingRentProperty, getCommentsCount, getCommentedProperty, loadReservedProperty, loadFavouritedProperty, sendManager, getManager, seenProperty, PropertyHot, getEngagedProperty, getFavouritedProperty, getAreaManagerData, getAreaManager, createAreaEmployee, getAreaEmployee, getAreaEmployeeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperties", function() { return getProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotification", function() { return getNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPendingCount", function() { return getPendingCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApprovedPropertyCount", function() { return getApprovedPropertyCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyCount", function() { return getPropertyCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaidRent", function() { return getPaidRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaidRentProperty", function() { return getPaidRentProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPenddingRent", function() { return getPenddingRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRunningProperty", function() { return getRunningProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalRenterCount", function() { return getTotalRenterCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalLandloardCount", function() { return getTotalLandloardCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalReservedCount", function() { return getTotalReservedCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalFavouritedCount", function() { return getTotalFavouritedCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalEmployeeCount", function() { return getTotalEmployeeCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalManagerCount", function() { return getTotalManagerCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalCSRCount", function() { return getTotalCSRCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApprovedProperty", function() { return getApprovedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProperty", function() { return loadProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentedProperty", function() { return commentedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPendingProperty", function() { return loadPendingProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadApprovedProperty", function() { return loadApprovedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRenter", function() { return getAllRenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalRentCount", function() { return getTotalRentCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLandloard", function() { return getAllLandloard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRerservedProperty", function() { return getAllRerservedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavouritedCount", function() { return getFavouritedCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaidRentList", function() { return getPaidRentList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoice", function() { return invoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyCommented", function() { return getPropertyCommented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCommentedProperty", function() { return loadCommentedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAssignProperty", function() { return updateAssignProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyManager", function() { return getPropertyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPropertyManager", function() { return loadPropertyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProperties", function() { return getAllProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPendingProperty", function() { return getPendingProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approvedProperty", function() { return approvedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllFavouritedProperty", function() { return getAllFavouritedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentedPropertyCount", function() { return commentedPropertyCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPenddingRentProperty", function() { return getPenddingRentProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommentsCount", function() { return getCommentsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommentedProperty", function() { return getCommentedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadReservedProperty", function() { return loadReservedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFavouritedProperty", function() { return loadFavouritedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendManager", function() { return sendManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManager", function() { return getManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seenProperty", function() { return seenProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyHot", function() { return PropertyHot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEngagedProperty", function() { return getEngagedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavouritedProperty", function() { return getFavouritedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaManagerData", function() { return getAreaManagerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaManager", function() { return getAreaManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaEmployee", function() { return createAreaEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaEmployee", function() { return getAreaEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaEmployeeData", function() { return getAreaEmployeeData; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function getProperties() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/properties');
}
function getNotification() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-notification');
}
function getPendingCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/pending-count');
}
function getApprovedPropertyCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/approved-property-count');
}
function getPropertyCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/property-count-manager');
}
function getPaidRent() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/paid-rent');
}
function getPaidRentProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/paid-rent-property');
}
function getPenddingRent() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/pendding-rent');
}
function getRunningProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/running-property');
}
function getTotalRenterCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-Renter-count');
}
function getTotalLandloardCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-Landloard-count');
}
function getTotalReservedCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/reserved-count');
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
} // export function getPendingProperty(){
//     return http().get('/total-pending-property');
// }

function getApprovedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-approved-property');
}
function loadProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("total-property?page=".concat(nextPage));
}
function commentedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/commented-property');
}
function loadPendingProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("pending-property-manager?page=".concat(nextPage));
}
function loadApprovedProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("total-approved-property?page=".concat(nextPage));
}
function getProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-property');
}
function getAllRenter() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/show-all-renter');
}
function getTotalRentCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/show-all-rent');
}
function getAllLandloard() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/show-all-landloard');
}
function getAllRerservedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/show-all-reserved-property-manager');
}
function getFavouritedCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-Favourited-Property');
}
function getPaidRentList() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-paid-rent-list');
}
function invoice(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/genrate-invoice', data);
}
function getPropertyCommented() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-commented-property-manager');
}
function loadCommentedProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("get-commented-property-manager?page=".concat(nextPage));
}
function updateAssignProperty(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().put("/update-properties/".concat(id), data);
}
function getPropertyManager() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-properties-manager');
}
function loadPropertyManager(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("get-properties-manager?page=".concat(nextPage));
}
function getAllProperties(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/get-all-properties-manager/".concat(id));
}
function getPendingProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/pending-property-manager');
} // export function loadPendingProperty(nextPage) {
//     return http().get(`pending-property-manager?page=${nextPage}`);
// }

function approvedProperty(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/property-approved-manager/".concat(id));
}
function getAllFavouritedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-All-Favourited-Property-manager');
}
function commentedPropertyCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-commented-property-count');
}
function getPenddingRentProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-pendding-property-count');
}
function getCommentsCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-commented-property-count');
}
function getCommentedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-notification-commented');
}
function loadReservedProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("show-all-reserved-property-manager?page=".concat(nextPage));
}
function loadFavouritedProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("get-All-Favourited-Property-manager?page=".concat(nextPage));
}
function sendManager(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/send-manager', data);
}
function getManager() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-managers');
}
function seenProperty(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/properties-seen/".concat(id));
}
function PropertyHot(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/property-hot-manager/".concat(id));
}
function getEngagedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-engaged-property-manager');
}
function getFavouritedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-favourited-property');
}
function getAreaManagerData() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-managers');
}
function getAreaManager(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-area-managers-data', request);
}
function createAreaEmployee(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/area_employees', data);
}
function getAreaEmployee() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/area_employees');
}
function getAreaEmployeeData(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-area-employee-data', request);
}

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

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);