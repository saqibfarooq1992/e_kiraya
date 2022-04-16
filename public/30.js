(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/PropertyDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/PropertyDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/user/Header.vue */ "./resources/js/components/user/Header.vue");
/* harmony import */ var _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/user/Footer.vue */ "./resources/js/components/user/Footer.vue");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/main_service */ "./resources/js/services/main_service.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user_service */ "./resources/js/services/user_service.js");


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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Header: _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: "property details",
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
      properties: [],
      details: [],
      moreExistsRecommanded: false,
      city_id: '',
      isHidden: false
    }, _defineProperty(_ref, "properties", []), _defineProperty(_ref, "favourites", []), _defineProperty(_ref, "reservation", {
      property_id: '',
      cnic: '',
      current_address: '',
      status: '',
      domicile: '',
      Name: '',
      avater: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone: '',
      // role: 'student',
      role: '',
      city_id: '' // terms: false

    }), _defineProperty(_ref, "contact", {
      name: '',
      email: '',
      subject: '',
      message: ''
    }), _defineProperty(_ref, "user", {
      Name: '',
      avater: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone: '',
      role: '',
      city_id: ''
    }), _defineProperty(_ref, "errors", {}), _defineProperty(_ref, "errors", []), _ref;
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
              return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["getPropertyDetail"](to.params.slug);

            case 3:
              response = _context.sent;

              if (!response) {
                next('/404');
              }

              next(function (vm) {
                vm.properties = response.data;
                vm.city_id = response.data.city_id; // vm.getProperty();
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
    this.recommendedProp();
    this.getCities();
  },
  methods: {
    togglePasswordShow: function togglePasswordShow() {
      var passwordField = this.$refs.passwordField;
      var passwordIcon = this.$refs.passwordIcon;

      if (passwordField.getAttribute('type') === 'password') {
        passwordField.setAttribute('type', 'text');
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
      } else {
        passwordField.setAttribute('type', 'password');
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye');
      }
    },
    validatePassword: function validatePassword() {
      if (this.user.password.length === 0) {
        return;
      }

      this.errors.password = '';
      var matchedCase = new Array();
      matchedCase.push("[$@$!%*#?&]");
      matchedCase.push("[A-Z]");
      matchedCase.push("[0-9]");
      matchedCase.push("[a-z]");
      var ctr = 0;

      for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(this.user.password)) {
          ctr++;
        }
      }

      var color = "";
      var strength = "";

      switch (ctr) {
        case 0:
        case 1:
        case 2:
          strength = "Very Weak";
          color = "red";
          break;

        case 3:
          strength = "Medium";
          color = "orange";
          break;

        case 4:
          strength = "Strong";
          color = "green";
          break;
      }

      this.$refs.passwordStrength.innerHTML = strength;
      this.$refs.passwordStrength.style.color = color;
    },
    changeNumber: function () {
      var _changeNumber = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(item) {
        var number, phoneNumber;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                number = item.manager_phone;
                phoneNumber = document.querySelector("#phonenumber");
                phoneNumber.innerHTML = "0333-5551717";

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function changeNumber(_x4) {
        return _changeNumber.apply(this, arguments);
      }

      return changeNumber;
    }(),
    getCities: function () {
      var _getCities = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["getCities"]();

              case 3:
                response = _context3.sent;
                this.cities = response.data;
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred during geting categories",
                  time: 5000
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function getCities() {
        return _getCities.apply(this, arguments);
      }

      return getCities;
    }(),
    myToggle: function () {
      var _myToggle = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                $(".heart").click(function () {
                  $(this).toggleClass('fa-heart');
                  $(this).toggleClass('fa-heart-o');
                });
                $(".thumbs").click(function () {
                  $(this).toggleClass('fa-thumbs-up');
                  $(this).toggleClass('fa-heart-o-up');
                });
                $(".share").click(function () {
                  $(this).toggleClass('fa-share-square');
                  $(this).toggleClass('fa-share-square-o');
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function myToggle() {
        return _myToggle.apply(this, arguments);
      }

      return myToggle;
    }(),
    recommendedProp: function () {
      var _recommendedProp = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["recommendedProp"](this.city_id);

              case 3:
                response = _context5.sent;
                this.details = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsRecommanded = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsRecommanded = false;
                }

                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function recommendedProp(_x5) {
        return _recommendedProp.apply(this, arguments);
      }

      return recommendedProp;
    }(),
    loadrecommendedProp: function () {
      var _loadrecommendedProp = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["loadrecommendedProp"](this.nextPage);

              case 3:
                response = _context6.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsRecommanded = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsRecommanded = false;
                }

                response.data.data.forEach(function (data) {
                  _this.details.push(data);
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

      function loadrecommendedProp() {
        return _loadrecommendedProp.apply(this, arguments);
      }

      return loadrecommendedProp;
    }(),
    showModal: function showModal() {
      this.$refs.newModal.show();
    },
    showEmailModal: function showEmailModal() {
      this.$refs.newEmailModal.show();
    },
    loginModal: function loginModal() {
      this.$refs.loginModal.show();
    },
    hideModal: function hideModal() {
      this.$refs.newModal.hide();
    },
    hideLoginModal: function hideLoginModal() {
      this.$refs.loginModal.hide();
    },
    updateReservedProperty: function () {
      var _updateReservedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (this.$store.state.isLoggedIn) {
                  _context7.next = 3;
                  break;
                }

                this.$router.push('/login');
                return _context7.abrupt("return");

              case 3:
                _context7.prev = 3;
                this.reservation.property_id = this.properties.id;
                _context7.next = 7;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["updateReservedProperty"](this.reservation);

              case 7:
                response = _context7.sent;
                this.flashMessage.success({
                  message: 'Property successfully add your reserved list',
                  time: 5000
                });

                if (this.$store.state.profile.role === 'admin') {
                  this.$router.push('/admin-dashboard');
                } else if (this.$store.state.profile.role === 'tenant') {
                  this.$router.push('/tenant');
                } else if (this.$store.state.profile.role === 'csr') {
                  this.$router.push('/csr');
                } else if (this.$store.state.profile.role === 'manager') {
                  this.$router.push('/manager');
                }

                _context7.next = 22;
                break;

              case 12:
                _context7.prev = 12;
                _context7.t0 = _context7["catch"](3);
                _context7.t1 = _context7.t0.response.status;
                _context7.next = _context7.t1 === 422 ? 17 : 19;
                break;

              case 17:
                this.errors = _context7.t0.response.data.errors;
                return _context7.abrupt("break", 22);

              case 19:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context7.abrupt("break", 22);

              case 22:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[3, 12]]);
      }));

      function updateReservedProperty() {
        return _updateReservedProperty.apply(this, arguments);
      }

      return updateReservedProperty;
    }(),
    attachImage: function attachImage() {
      this.reservation.avater = this.$refs.avaterImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.newAvaterImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.reservation.avater);
    },
    favourite: function () {
      var _favourite = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(item) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (this.$store.state.isLoggedIn) {
                  _context8.next = 3;
                  break;
                }

                this.$router.push('/login');
                return _context8.abrupt("return");

              case 3:
                _context8.prev = 3;
                _context8.next = 6;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["favourite"](item);

              case 6:
                response = _context8.sent;
                this.details.map(function (detail) {
                  if (detail.id === item.id) {
                    detail.favorited = true;
                  }
                });
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                _context8.next = 14;
                break;

              case 11:
                _context8.prev = 11;
                _context8.t0 = _context8["catch"](3);
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });

              case 14:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[3, 11]]);
      }));

      function favourite(_x6) {
        return _favourite.apply(this, arguments);
      }

      return favourite;
    }(),
    contactUs: function () {
      var _contactUs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _services_user_service__WEBPACK_IMPORTED_MODULE_4__["contactUs"](this.contact);

              case 3:
                response = _context9.sent;
                this.errors = {};
                this.contact = {};
                this.flashMessage.success({
                  message: "your email send successfully!",
                  time: 5000
                });
                _context9.next = 13;
                break;

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9["catch"](0);
                this.errors = _context9.t0.response.data.errors;
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 9]]);
      }));

      function contactUs() {
        return _contactUs.apply(this, arguments);
      }

      return contactUs;
    }()
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/PropertyDetails.vue?vue&type=style&index=0&Scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/PropertyDetails.vue?vue&type=style&index=0&Scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.priceposition{\n    display: block;\n    margin-left: auto;\n}\n.btncontact{\nwidth: 100%;\n}\n.carousel {\n  position: relative;\n}\n#myCarousel img{\n    height: 400px;\n}\n#carousel-thumbs2 img{\n    height: 70px;\n    width: 100%;\n}\n#carousel-thumbs {\n  background: rgba(255,255,255,.3);\n  bottom: 0;\n  left: 0;\n  padding: 0 50px;\n  right: 0;\n}\n#carousel-thumbs img {\n  border: 5px solid transparent;\n  cursor: pointer;\n}\n#carousel-thumbs img:hover {\n  border-color: rgba(255,255,255,.3);\n}\n#carousel-thumbs .selected img {\n  border-color: #fff;\n}\n.carousel-control-prev,\n.carousel-control-next {\n  width: 50px;\n}\n@media all and (max-width: 767px) {\n.carousel-container #carousel-thumbs img {\n    border-width: 3px;\n}\n}\n@media all and (min-width: 576px) {\n.carousel-container #carousel-thumbs {\n    position: absolute;\n}\n}\n@media all and (max-width: 576px) {\n.carousel-container #carousel-thumbs {\n    background: #CCCCCE;\n}\n}\n@media all and (max-width: 600px) {\n.btncontact{\nwidth: 100%;\nmargin-top: 10px;\n}\n.priceposition{\ndisplay: contents;\n}\n}\n@media only screen and (min-width:768px ) and (max-width: 998px){\n.recommendedaddesktop{\n            display: none;\n}\n.recommendedadtabs .adsclick-footer{\n              width: 100%;\n}\n.ad-item{\n            margin-top: 0px;\n}\n}\n@media only screen and (min-width: 999px){\n.recommendedadtabs{\n       display: none;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/PropertyDetails.vue?vue&type=style&index=0&Scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/PropertyDetails.vue?vue&type=style&index=0&Scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PropertyDetails.vue?vue&type=style&index=0&Scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/PropertyDetails.vue?vue&type=style&index=0&Scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/PropertyDetails.vue?vue&type=template&id=69214d48&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/PropertyDetails.vue?vue&type=template&id=69214d48& ***!
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
      _c("Header"),
      _vm._v(" "),
      _c(
        "section",
        {
          staticClass: "clearfix details-page bg-light pt-2",
          attrs: { id: "main" }
        },
        [
          _c("div", { staticClass: "container" }, [
            _vm.properties.property_name === "House"
              ? _c(
                  "div",
                  {
                    staticClass: "container row",
                    staticStyle: { "background-color": "white" }
                  },
                  [
                    _c("div", { staticClass: "col-md-7 m-0" }, [
                      _c("div", { staticClass: "desktop-view" }, [
                        _c("div", { staticClass: "container mt-2" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "carousel-container position-relative row"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "carousel slide",
                                  attrs: {
                                    id: "myCarousel",
                                    "data-ride": "carousel"
                                  }
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
                                    _c(
                                      "div",
                                      { staticClass: "carousel-item active" },
                                      [
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
                                                    "storage/" +
                                                    _vm.properties.pic6,
                                                  alt: "..."
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
                                      { staticClass: "carousel-item" },
                                      [
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
                                                    "storage/" +
                                                    _vm.properties.pic12,
                                                  alt: "..."
                                                }
                                              })
                                            ]
                                          )
                                        ])
                                      ]
                                    )
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
                    _c(
                      "div",
                      {
                        staticClass: "col-md-5",
                        staticStyle: { "padding-top": "5px" }
                      },
                      [
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
                              { staticClass: "priceposition text-success" },
                              [
                                _vm._v(
                                  " Rs " + _vm._s(_vm.properties.rent_price)
                                )
                              ]
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
                                    "\n                                  "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a", [
                                _c("i", { staticClass: "fa fa-shower px-2" }),
                                _vm._v(
                                  _vm._s(_vm.properties.bathrooms) +
                                    "\n                                  "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a", { staticClass: "pr-1" }, [
                                _c("strong", [_vm._v("Property Status:")]),
                                _vm._v(
                                  _vm._s(_vm.properties.status) +
                                    "\n                                  "
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
                          _c("div", [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-success form-contol btncontact",
                                    attrs: { id: "phonenumber" },
                                    on: {
                                      click: function($event) {
                                        return _vm.changeNumber(_vm.properties)
                                      }
                                    }
                                  },
                                  [_vm._v("Call")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-4" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-warning btncontact",
                                    on: { click: _vm.showEmailModal }
                                  },
                                  [_vm._v("Email")]
                                ),
                                _c("br")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-4" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn hide-number btn-outline-info d-block ml-auto w-100 btncontact",
                                    on: { click: _vm.showModal }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                         Reserved\n                                      "
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _vm._m(3),
                          _vm._v(" "),
                          _c("strong", [_vm._v("Message:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                              I would like to inquire about your property EKO - ID27395957.\n                               Please contact me at your earliest convenience.\n                            "
                            )
                          ])
                        ])
                      ]
                    )
                  ]
                )
              : _c(
                  "div",
                  {
                    staticClass: "container row",
                    staticStyle: { "background-color": "white" }
                  },
                  [
                    _c("div", { staticClass: "col-md-7 m-0" }, [
                      _c("div", { staticClass: "desktop-view" }, [
                        _c("div", { staticClass: "container mt-2" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "carousel-container position-relative row"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "carousel slide",
                                  attrs: {
                                    id: "myCarousel",
                                    "data-ride": "carousel"
                                  }
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
                                    _c(
                                      "div",
                                      { staticClass: "carousel-item active" },
                                      [
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
                                                    "storage/" +
                                                    _vm.properties.pic6,
                                                  alt: "..."
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
                                      { staticClass: "carousel-item" },
                                      [
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
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
                                                staticClass:
                                                  "img-fluid mobilecarousal",
                                                attrs: {
                                                  src:
                                                    _vm.$store.state
                                                      .serverPath +
                                                    "storage/" +
                                                    _vm.properties.pic8,
                                                  alt: "..."
                                                }
                                              })
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm._m(4),
                                  _vm._v(" "),
                                  _vm._m(5)
                                ]
                              )
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-5",
                        staticStyle: { "padding-top": "10px" }
                      },
                      [
                        _c("div", { staticClass: "slider-text" }, [
                          _c("div", { staticClass: "row price" }, [
                            _c("h3", { staticClass: " text-dark" }, [
                              _vm._v(_vm._s(_vm.properties.title))
                            ]),
                            _vm._v(" "),
                            _c(
                              "h3",
                              { staticClass: "priceposition text-success" },
                              [
                                _vm._v(
                                  " Rs " + _vm._s(_vm.properties.rent_price)
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _c("span", [
                              _vm._v(
                                "\n                                    Ad ID:"
                              ),
                              _c(
                                "a",
                                { staticClass: "time", attrs: { href: "#" } },
                                [_vm._v(_vm._s(_vm.properties.property_number))]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "short-info" }, [
                            _c("p", [
                              _c("strong", [_vm._v("Furnished: ")]),
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v(_vm._s(_vm.properties.furnished))
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "px-3" }, [
                                _c("strong", [_vm._v("City: ")]),
                                _c("a", { attrs: { href: "#" } }, [
                                  _vm._v(_vm._s(_vm.properties.city_name))
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("strong", [_vm._v("City: ")]),
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v(_vm._s(_vm.properties.city_name))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("strong", [_vm._v("Sector: ")]),
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v(_vm._s(_vm.properties.sector))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("strong", [_vm._v("Address: ")]),
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v(_vm._s(_vm.properties.address))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("strong", [_vm._v("Property Size: ")]),
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v(
                                  _vm._s(_vm.properties.size) +
                                    " " +
                                    _vm._s(_vm.properties.unit)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("a", { staticClass: "pr-1" }, [
                                _c("strong", [_vm._v("Furnished:")]),
                                _vm._v(_vm._s(_vm.properties.furnished))
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("h4", [_vm._v("Contact with ")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-success form-contol btncontact",
                                    attrs: { id: "phonenumber" },
                                    on: {
                                      click: function($event) {
                                        return _vm.changeNumber(_vm.properties)
                                      }
                                    }
                                  },
                                  [_vm._v("Call")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-4" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-warning btncontact",
                                    on: { click: _vm.showEmailModal }
                                  },
                                  [_vm._v("Email")]
                                ),
                                _c("br")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-4" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn hide-number btn-outline-info d-block ml-auto w-100 btncontact",
                                    on: { click: _vm.showModal }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            Reserved\n                                          "
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _vm._m(6)
                        ])
                      ]
                    )
                  ]
                ),
            _vm._v(" "),
            _c("div", { staticClass: "description-info mt-5" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-8" }, [
                  _c("div", { staticClass: "description" }, [
                    _c("h4", [_vm._v("Description")]),
                    _vm._v(" "),
                    _c("p", {
                      domProps: {
                        innerHTML: _vm._s(_vm.properties.description)
                      }
                    }),
                    _c("br")
                  ])
                ]),
                _vm._v(" "),
                _vm._m(7)
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "recommended-info" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-8" }, [
                  _c(
                    "div",
                    { staticClass: "section recommended-ads" },
                    [
                      _vm._m(8),
                      _vm._v(" "),
                      _vm._l(_vm.details, function(favourite, index) {
                        return _c(
                          "div",
                          {
                            key: index,
                            staticClass: "ad-item row recommendedaddesktop"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "item-image-box col-lg-4" },
                              [
                                _c("div", { staticClass: "item-image" }, [
                                  _c("a", { attrs: { href: "details.html" } }, [
                                    _c("img", {
                                      staticClass: "img-fluid",
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          favourite.pic1,
                                        alt: "Image",
                                        height: "150"
                                      }
                                    })
                                  ])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "item-info col-lg-8 p-0" },
                              [
                                _c("div", { staticClass: "ad-info" }, [
                                  _c("h5", { staticClass: "item-price" }, [
                                    _vm._v(
                                      "Rs: " + _vm._s(favourite.rent_price)
                                    ),
                                    _c("i", {
                                      staticClass:
                                        "fa fa-heart-o  pull-right heart",
                                      on: {
                                        click: function($event) {
                                          return favourite(favourite)
                                        }
                                      }
                                    }),
                                    _c("i", {
                                      staticClass:
                                        "fa fa-thumbs-o-up pull-right thumbs",
                                      on: { click: _vm.myToggle }
                                    }),
                                    _c("i", {
                                      staticClass:
                                        "fa fa-share-square-o pull-right share",
                                      on: { click: _vm.myToggle }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("h6", { staticClass: "item-title" }, [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _vm._v(_vm._s(favourite.title))
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "item-cat" }, [
                                    _c("span", [
                                      _c("a", { attrs: { href: "#" } }, [
                                        _vm._v(
                                          _vm._s(favourite.city_name) +
                                            " / " +
                                            _vm._s(favourite.sector)
                                        )
                                      ])
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "adsclick-footer" }, [
                                  _c("div", { staticClass: "d-inline-block" }, [
                                    _vm._m(9, true),
                                    _vm._v(" "),
                                    _vm._m(10, true),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-inline-block adsclickicon ml-auto"
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            attrs: {
                                              href: "#",
                                              "data-toggle": "tooltip",
                                              "data-placement": "top",
                                              title: "Islamabad"
                                            }
                                          },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src:
                                                  _vm.$store.state.serverPath +
                                                  "images/map.png",
                                                height: "18px",
                                                width: "30px"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ]
                            )
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.details, function(detail, index) {
                        return _c(
                          "div",
                          {
                            key: index,
                            staticClass: "ad-item row recommendedadtabs "
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c("div", { staticClass: "item-image" }, [
                                  _c("a", { attrs: { href: "details.html" } }, [
                                    _c("img", {
                                      staticClass: "img-fluid",
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          detail.pic1,
                                        alt: "Image"
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-8" }, [
                                _c("div", { staticClass: "ad-info" }, [
                                  _c("h5", { staticClass: "item-price" }, [
                                    _vm._v("Rs: " + _vm._s(detail.rent_price)),
                                    _c("i", {
                                      staticClass:
                                        "fa fa-heart-o  pull-right heart",
                                      on: {
                                        click: function($event) {
                                          return _vm.favourite(detail)
                                        }
                                      }
                                    }),
                                    _c("i", {
                                      staticClass:
                                        "fa fa-thumbs-o-up pull-right thumbs",
                                      on: { click: _vm.myToggle }
                                    }),
                                    _c("i", {
                                      staticClass:
                                        "fa fa-share-square-o pull-right share",
                                      on: { click: _vm.myToggle }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("h6", { staticClass: "item-title" }, [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _vm._v(_vm._s(detail.title))
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "item-cat" }, [
                                    _c("span", [
                                      _c("a", { attrs: { href: "#" } }, [
                                        _vm._v(
                                          _vm._s(detail.city_name) +
                                            " / " +
                                            _vm._s(detail.sector)
                                        )
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "adsclick-footer" }, [
                              _c("div", { staticClass: "d-inline-block" }, [
                                _vm._m(11, true),
                                _vm._v(" "),
                                _vm._m(12, true),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "d-inline adsclickicon" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        attrs: {
                                          href: "#",
                                          "data-toggle": "tooltip",
                                          "data-placement": "top",
                                          title: "Islamabad"
                                        }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src:
                                              _vm.$store.state.serverPath +
                                              "images/map.png",
                                            height: "18px",
                                            width: "30px"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ])
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
                              value: _vm.moreExistsRecommanded,
                              expression: "moreExistsRecommanded"
                            }
                          ]
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info btn-sm",
                              attrs: { type: "button" },
                              on: { click: _vm.loadrecommendedProp }
                            },
                            [_c("i", { staticClass: "fas fa-arrow-down" })]
                          )
                        ]
                      )
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 text-center" }, [
                  _c("div", { staticClass: "recommended-cta" }, [
                    _c("div", { staticClass: "cta" }, [
                      _vm._m(13),
                      _vm._v(" "),
                      _vm._m(14),
                      _vm._v(" "),
                      _c("div", { staticClass: "single-cta" }, [
                        _c("div", { staticClass: "cta-icon icon-trading" }, [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src:
                                _vm.$store.state.serverPath +
                                "images/icon/15.png",
                              alt: "Icon"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("h4", [_vm._v("Easy Trading")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(15)
                    ])
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
                  ref: "newModal",
                  attrs: { "hide-footer": "", title: "Reservation Form" }
                },
                [
                  !_vm.$store.state.isLoggedIn
                    ? _c(
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
                            _vm.reservation.avater.name
                              ? _c("div", [
                                  _c("img", {
                                    ref: "newAvaterImageDisplay",
                                    staticStyle: {
                                      width: "100px",
                                      "border-radius": "50%",
                                      "margin-top": "-47px"
                                    },
                                    attrs: {
                                      src: "images/img_avatar.png",
                                      alt: "Avatar"
                                    }
                                  })
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col-lg-6 col-md-6 col-sm-6" },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.reservation.Name,
                                          expression: "reservation.Name"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Name"
                                      },
                                      domProps: { value: _vm.reservation.Name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.reservation,
                                            "Name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.Name
                                      ? _c(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [_vm._v(_vm._s(_vm.errors.Name[0]))]
                                        )
                                      : _vm._e()
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-lg-6 col-md-6 col-sm-6" },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.reservation.email,
                                          expression: "reservation.email"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "email",
                                        placeholder: "Email Id"
                                      },
                                      domProps: {
                                        value: _vm.reservation.email
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.reservation,
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
                                          { staticClass: "invalid-feedback" },
                                          [_vm._v(_vm._s(_vm.errors.email[0]))]
                                        )
                                      : _vm._e()
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col-lg-6 col-md-6 col-sm-6" },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("div", { staticClass: "relative" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.reservation.password,
                                            expression: "reservation.password"
                                          }
                                        ],
                                        ref: "passwordField",
                                        staticClass:
                                          "form-control form-control-user",
                                        attrs: {
                                          type: "password",
                                          placeholder: "Password"
                                        },
                                        domProps: {
                                          value: _vm.reservation.password
                                        },
                                        on: {
                                          keyup: _vm.validatePassword,
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.reservation,
                                              "password",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "show-password",
                                          attrs: { type: "button" },
                                          on: { click: _vm.togglePasswordShow }
                                        },
                                        [
                                          _c("span", {
                                            ref: "passwordIcon",
                                            staticClass: "fa fa-eye"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.errors.password
                                        ? _c(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.errors.password[0])
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.reservation.password.length
                                        ? _c("i", {
                                            ref: "passwordStrength",
                                            staticClass: "password-strength"
                                          })
                                        : _vm._e()
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-lg-6 col-md-6 col-sm-6" },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.reservation
                                              .password_confirmation,
                                          expression:
                                            "reservation.password_confirmation"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "password",
                                        placeholder: "Confirm Password"
                                      },
                                      domProps: {
                                        value:
                                          _vm.reservation.password_confirmation
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.reservation,
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
                                          { staticClass: "invalid-feedback" },
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
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col-lg-6 col-md-6 col-sm-6" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "input-group mb-3" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group-prepend " },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "input-group-text",
                                              attrs: { id: "basic-addon1" }
                                            },
                                            [
                                              _c("img", {
                                                attrs: {
                                                  src: "/images/bg/pakflag.png"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input-mask", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          mask: "9999-9999999",
                                          maskChar: "",
                                          placeholder: "Phone No",
                                          "aria-label": "Phone",
                                          "aria-describedby": "basic-addon1"
                                        },
                                        model: {
                                          value: _vm.reservation.phone,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.reservation,
                                              "phone",
                                              $$v
                                            )
                                          },
                                          expression: "reservation.phone"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-lg-6 col-md-6 col-sm-6" },
                                [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.reservation.role,
                                          expression: "reservation.role"
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
                                            _vm.reservation,
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
                                        _vm._v("Select Who are you")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "landloard" } },
                                        [_vm._v("Landlord")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "tenant" } },
                                        [_vm._v("Tenant")]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col-lg-6 col-sm-6 col-md-6" },
                                [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.reservation.city_id,
                                          expression: "reservation.city_id"
                                        }
                                      ],
                                      staticClass: "form-control selectcity",
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
                                            _vm.reservation,
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
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-lg-6 col-sm-6 col-md-6" },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "float-left text-success "
                                      },
                                      [_vm._v("Image ....(optional)")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      ref: "avaterImage",
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "file",
                                        name: "avatar",
                                        id: "Avatar"
                                      },
                                      on: { change: _vm.attachImage }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.avatar
                                      ? _c(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [_vm._v(_vm._s(_vm.errors.avatar[0]))]
                                        )
                                      : _vm._e()
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "checkbox" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "pull-left checked",
                                  attrs: { for: "signing" }
                                },
                                [
                                  _c("input", {
                                    attrs: {
                                      type: "checkbox",
                                      name: "signing",
                                      id: "signing"
                                    }
                                  }),
                                  _vm._v(
                                    " By signing up for an account you agree to our Terms and Conditions "
                                  )
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("fieldset", [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "div",
                                    { staticClass: " inputGroupContainer" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "input-group-addon"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "glyphicon glyphicon-home"
                                              })
                                            ]
                                          ),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.reservation.domicile,
                                                expression:
                                                  "reservation.domicile"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              name: "Domicile",
                                              placeholder: "Domicile ",
                                              required: "true",
                                              type: "text"
                                            },
                                            domProps: {
                                              value: _vm.reservation.domicile
                                            },
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
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "div",
                                    { staticClass: " inputGroupContainer" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "input-group-addon"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "glyphicon glyphicon-user"
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
                                                _vm.$set(
                                                  _vm.reservation,
                                                  "cnic",
                                                  $$v
                                                )
                                              },
                                              expression: "reservation.cnic"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "div",
                                    { staticClass: " inputGroupContainer" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "input-group-addon"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "glyphicon glyphicon-home"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.reservation
                                                    .current_address,
                                                expression:
                                                  "reservation.current_address"
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
                                              value:
                                                _vm.reservation.current_address
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
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-6" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group wrapper" },
                                  [
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
                                        _c(
                                          "option",
                                          { attrs: { value: "bachelor" } },
                                          [_vm._v("Bachelor")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "family" } },
                                          [_vm._v("Family")]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Reserved Property")]
                          )
                        ]
                      )
                    : _c(
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
                                  _c(
                                    "div",
                                    { staticClass: " inputGroupContainer" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "input-group-addon"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "glyphicon glyphicon-home"
                                              })
                                            ]
                                          ),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.reservation.domicile,
                                                expression:
                                                  "reservation.domicile"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              name: "Domicile",
                                              placeholder: "Domicile ",
                                              required: "true",
                                              type: "text"
                                            },
                                            domProps: {
                                              value: _vm.reservation.domicile
                                            },
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
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "div",
                                    { staticClass: " inputGroupContainer" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "input-group-addon"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "glyphicon glyphicon-user"
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
                                                _vm.$set(
                                                  _vm.reservation,
                                                  "cnic",
                                                  $$v
                                                )
                                              },
                                              expression: "reservation.cnic"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "div",
                                    { staticClass: " inputGroupContainer" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "input-group-addon"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "glyphicon glyphicon-home"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.reservation
                                                    .current_address,
                                                expression:
                                                  "reservation.current_address"
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
                                              value:
                                                _vm.reservation.current_address
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
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-6" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group wrapper" },
                                  [
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
                                        _c(
                                          "option",
                                          { attrs: { value: "bachelor" } },
                                          [_vm._v("Bachelor")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "family" } },
                                          [_vm._v("Family")]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info",
                              attrs: { type: "submit" }
                            },
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
                                  _vm.$set(
                                    _vm.contact,
                                    "name",
                                    $event.target.value
                                  )
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
          )
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
    return _c("div", { staticClass: "social-links" }, [
      _c("h4", [_vm._v("Share this ad")]),
      _vm._v(" "),
      _c("ul", { staticClass: "list-inline my-0" }, [
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
    return _c("div", { staticClass: "social-links" }, [
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
      _c("div", { staticClass: "short-info" }, [
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "featured-top" }, [
      _c("h4", [_vm._v("Recommended Properties for You")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-inline" }, [
      _c("span", { staticClass: "dated" }, [
        _c("a", { staticClass: "text-muted", attrs: { href: "#" } }, [
          _vm._v("7 Jan, 16  10:10 pm ")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-inline adsclickicon" }, [
      _c("a", { staticClass: "tag text-muted", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fa fa-tags" }),
        _vm._v(" New")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-inline" }, [
      _c("span", { staticClass: "dated" }, [
        _c("a", { staticClass: "text-muted", attrs: { href: "#" } }, [
          _vm._v("7 Jan, 16  10:10 pm ")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-inline adsclickicon" }, [
      _c("a", { staticClass: "tag text-muted", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fa fa-tags" }),
        _vm._v(" New")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "single-cta" }, [
      _c("div", { staticClass: "cta-icon icon-secure" }),
      _vm._v(" "),
      _c("h4", [_vm._v("Secure Trading")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "single-cta" }, [
      _c("div", { staticClass: "cta-icon icon-support" }),
      _vm._v(" "),
      _c("h4", [_vm._v("24/7 Support")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "single-cta" }, [
      _c("h5", [_vm._v("Need Help?")]),
      _vm._v(" "),
      _c("p", [
        _c("span", [_vm._v("Give a call on")]),
        _c("a", { attrs: { href: "tellto:08048100000" } }, [
          _vm._v(" 08048100000")
        ])
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/views/user/PropertyDetails.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/user/PropertyDetails.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PropertyDetails_vue_vue_type_template_id_69214d48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertyDetails.vue?vue&type=template&id=69214d48& */ "./resources/js/views/user/PropertyDetails.vue?vue&type=template&id=69214d48&");
/* harmony import */ var _PropertyDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertyDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/user/PropertyDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PropertyDetails_vue_vue_type_style_index_0_Scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyDetails.vue?vue&type=style&index=0&Scoped=true&lang=css& */ "./resources/js/views/user/PropertyDetails.vue?vue&type=style&index=0&Scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PropertyDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PropertyDetails_vue_vue_type_template_id_69214d48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PropertyDetails_vue_vue_type_template_id_69214d48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/PropertyDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/PropertyDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/user/PropertyDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PropertyDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/PropertyDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/PropertyDetails.vue?vue&type=style&index=0&Scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/user/PropertyDetails.vue?vue&type=style&index=0&Scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_style_index_0_Scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PropertyDetails.vue?vue&type=style&index=0&Scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/PropertyDetails.vue?vue&type=style&index=0&Scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_style_index_0_Scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_style_index_0_Scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_style_index_0_Scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_style_index_0_Scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/user/PropertyDetails.vue?vue&type=template&id=69214d48&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/user/PropertyDetails.vue?vue&type=template&id=69214d48& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_template_id_69214d48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PropertyDetails.vue?vue&type=template&id=69214d48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/PropertyDetails.vue?vue&type=template&id=69214d48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_template_id_69214d48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_template_id_69214d48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);