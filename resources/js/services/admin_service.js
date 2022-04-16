import { http, httpFile } from './http_service';
// Request From Admin Dashboard
export function getProperty(){
    return http().get('/get-property-admin');
}
export function getProperties(){
    return http().get('/get-properties-admin');
}
export function loadProperties(nextPage) {
    return http().get(`get-properties-admin?page=${nextPage}`);
}
export function searchProperty(request) {
    return http().post('/search-property-admin',request);
}
export function getCity(){
    return http().get('/cities')
}
export function searchInvoiceQuery(request) {
    return http().post('/search-properties-admin',request);
}
export function getFavourit(){
    return http().get('/get-All-Favourited-Property');
}

export function getNotification(){
    return http().get('/get-notification')
}
export function getApprovedPropertyNotification(){
    return http().get('/get-notification-property')
}
export function getPendingPropertyCount(){
    return http().get('/pending-property-count')
}
export function getApprovedPropertyCount(){
    return http().get('/approved-property-count');
}
export function getTotalPropertyCount(){
    return http().get('/total-property-count');
}
export function propertyCount(){
    return http().get('/total-notification-count');
}
export function getTotalRenterCount(){
    return http().get('/total-Renter-count');
}
export function getTotalLandloardCount(){
    return http().get('/total-Landloard-count');
}
export function getTotalReservedCount(){
    return http().get('/total-reserved-count');
}

export function getTotalFavouritedCount(){
    return http().get('/total-favourited-count');
}

export function getTotalEmployeeCount(){
    return http().get('/total-employee-count');
}
export function getTotalManagerCount(){
    return http().get('/total-manager-count');
}
export function getTotalCSRCount(){
    return http().get('/total-csr-count');
}
export function getPendingProperty(){
    return http().get('/pending-property-admin');
}
export function getApprovedProperty(){
    return http().get('/total-approved-property');
}
export function getPaidRent() {
    return http().get('/total-paid-rent-admin');
}
export function getPendingRent() {
    return http().get('/total-un-paid-rent-admin');
}
export function loadProperty(nextPage) {
    return http().get(`total-property?page=${nextPage}`);
}
export function loadPendingProperty(nextPage) {
    return http().get(`total-pending-property?page=${nextPage}`);
}
export function loadApprovedProperty(nextPage) {
    return http().get(`total-approved-property?page=${nextPage}`);
}


export function getPropertyNotify(){
    return http().get('/get-pending-property');
}
export function getAllRenter(){
    return http().get('/show-all-renter');
}
export function getAllLandloard(){
    return http().get('/show-all-landloard');
}
export function loadLandlords(nextPage) {
    return http().get(`show-all-landloard?page=${nextPage}`);
}
export function getAllRerservedProperty(){
    return http().get('/show-all-reserved-property-admin');
}
export function getAllFavouritedProperty(){
    return http().get('/get-All-Favourited-Property');
}
export function getTotalRentCount(){
    return http().get('/show-all-rent');
}
export function getTotalPaidRentCount(){
    return http().get('/total-paid-rent');
}
export function getTotalPenddingRentCount(){
    return http().get('/total-pendding-rent');
}
// export function searchProperty(request) {
//     return http().post('/search-Favorited-properties-admin',request);
// }
export function updateAssignProperty(id , data){
    return http().put(`/properties/${id}`, data);
}
export function getLatestPropertyCount(){
    return http().get('/all-latest-property-count-admin')
}
export function loadLatestProperty(nextPage) {
    return http().get(`all-latest-property-count-admin?page=${nextPage}`);
}
export function getLatestProperty(){
    return http().get('/get-property-for-admin')
}
export function getOldProperty(){
    return http().get('/get-old-property-for-admin')
}
export function getReservedProperty(){
    return http().get('/show-all-reserved-property-admin')
}
export function loadReservedProperty(nextPage) {
    return http().get(`show-all-reserved-property-admin?page=${nextPage}`);
}
export function getTotalRentProperty() {
    return http().get('/total-rent-admin');
}

export function getPendingRentList() {
    return http().get('/get-pending-property-rent-admin');
}
export function getListTotalPorperty() {
    return http().get('/all-property');
}
export function engagedProperty(){
    return http().get('/engaged-properties-admin')
}
export function getPenddingProperty() {
    return http().get('/get-pending-property-list');
}
export function getTotalPorperty() {
    return http().get('/total-property-admin');
}

export function searchReservedProperty(request) {
    return http().post('/search-reserved-property',request);
}
export function loadReserved(nextPage) {
    return http().get(`show-all-reserved-property-admin?page=${nextPage}`);
}
export function loadFavouritedProperty(nextPage) {
    return http().get(`get-All-Favourited-Property?page=${nextPage}`);
}
export function getReservedPropertyadmin(){
    return http().get('/reserved-property-list-tenant')
}
export function getEngagedCount(){
    return http().get('/engage-count');
}
export function getEngagedProperty(){
    return http().get('/engaged-properties-admin');
}
export function getManagerData(id){
    return http().post(`/get-managers-data-admin/${id}`);
}
export function getEmployeeData(id){
    return http().post(`/get-employees-data-admin/${id}`);
}
export function getTenantData(id){
    return http().post(`/get-tenant-data-admin/${id}`);
}
export function searchReact(request) {
    return http().post('/search-react-admin',request);
}

export function PropertyHot(id){
    return http().post(`/property-hot/${id}`);
}
export function getAreaManager(request) {
    return http().get('/get-area-admin',request);
}
export function getTenant(request) {
    return http().get('/get-tenant',request);
}
export function unPaidPropertyRent(id){
    return http().post(`/property-un-paid-rent-admin/${id}`);
}
export function suspendProperty(data) {
    return http().post('/suspensions',data);
}
export function getSuspendedProperty(request) {
    return http().get('/suspensions',request);
}
export function deleteSuspendedProperty(id){
    return http().delete(`/suspensions/${id}`);
}
export function getAssignEmployee(request) {
    return http().get('/suspensions',request);
}
export function getAssignManager(request) {
    return http().get('/managers',request);
}
