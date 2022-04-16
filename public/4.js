(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/services/csr_service.js":
/*!**********************************************!*\
  !*** ./resources/js/services/csr_service.js ***!
  \**********************************************/
/*! exports provided: totalProperty, totalReserved, totalPendding, totalRunningProperty, totalfavouritedProperty, totalPropertyRent, totalPaidRent, totalPenddingRent, getFavouritedProperty, ForwardToManager, approvedProperty, getPendingPropertyCsr, PropertyHot, unPaidPropertyRent, getLandlord, searchProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalProperty", function() { return totalProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalReserved", function() { return totalReserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalPendding", function() { return totalPendding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalRunningProperty", function() { return totalRunningProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalfavouritedProperty", function() { return totalfavouritedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalPropertyRent", function() { return totalPropertyRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalPaidRent", function() { return totalPaidRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalPenddingRent", function() { return totalPenddingRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavouritedProperty", function() { return getFavouritedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardToManager", function() { return ForwardToManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approvedProperty", function() { return approvedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPendingPropertyCsr", function() { return getPendingPropertyCsr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyHot", function() { return PropertyHot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unPaidPropertyRent", function() { return unPaidPropertyRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLandlord", function() { return getLandlord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProperty", function() { return searchProperty; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function totalProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/property-count');
}
function totalReserved() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/reserved-property-count');
}
function totalPendding() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/pendding-property-count');
}
function totalRunningProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/running-property-count');
}
function totalfavouritedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/running-favourited-count');
}
function totalPropertyRent() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/property-rent-count');
}
function totalPaidRent() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/paid-rent-count');
}
function totalPenddingRent() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/pendding-rent-count');
}
function getFavouritedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-favourited-list');
}
function ForwardToManager(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/property-forword/".concat(id));
}
function approvedProperty(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/property-approved-csr/".concat(id));
}
function getPendingPropertyCsr() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/pending-property-csr');
}
function PropertyHot(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/property-hot-csr/".concat(id));
}
function unPaidPropertyRent(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/property-un-paid-rent-csr/".concat(id));
}
function getLandlord(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/get-all-landlord-csr/".concat(id));
}
function searchProperty(request, id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/search-all-properties-csr/".concat(id), request);
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

/***/ })

}]);