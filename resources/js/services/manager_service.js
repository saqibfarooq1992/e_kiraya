import { http, httpFile } from './http_service';
export function getProperties(){
    return http().get('/properties');
}


export function getNotification(){
    return http().get('/get-notification')
}
export function getPendingCount(){
    return http().get('/pending-count')
}
export function getApprovedPropertyCount(){
    return http().get('/approved-property-count');
}
export function getPropertyCount(){
    return http().get('/property-count-manager');
}
export function getPaidRent(){
    return http().get('/paid-rent');
}
export function getPaidRentProperty(){
    return http().get('/paid-rent-property');
}
export function getPenddingRent(){
    return http().get('/pendding-rent');
}
export function getRunningProperty(){
    return http().get('/running-property');
}
export function getTotalRenterCount(){
    return http().get('/total-Renter-count');
}
export function getTotalLandloardCount(){
    return http().get('/total-Landloard-count');
}
export function getTotalReservedCount(){
    return http().get('/reserved-count');
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
// export function getPendingProperty(){
//     return http().get('/total-pending-property');
// }

export function getApprovedProperty(){
    return http().get('/total-approved-property');
}
export function loadProperty(nextPage) {
    return http().get(`total-property?page=${nextPage}`);
}
export function commentedProperty() {
    return http().get('/commented-property');
}
export function loadPendingProperty(nextPage) {
    return http().get(`pending-property-manager?page=${nextPage}`);
}
export function loadApprovedProperty(nextPage) {
    return http().get(`total-approved-property?page=${nextPage}`);
}
export function getProperty(){
    return http().get('/get-property');
}
export function getAllRenter(){
    return http().get('/show-all-renter');
}
export function getTotalRentCount(){
    return http().get('/show-all-rent');
}
export function getAllLandloard(){
    return http().get('/show-all-landloard');
}
export function getAllRerservedProperty(){
    return http().get('/show-all-reserved-property-manager');
}
export function getFavouritedCount(){
    return http().get('/get-Favourited-Property');
}
export function getPaidRentList(){
    return http().get('/get-paid-rent-list');
}
export function invoice(data) {
    return http().post('/genrate-invoice', data);
}
export function getPropertyCommented(){
    return http().get('/get-commented-property-manager');
}
export function loadCommentedProperty(nextPage) {
    return http().get(`get-commented-property-manager?page=${nextPage}`);
}
export function updateAssignProperty(id , data){
    return httpFile().put(`/update-properties/${id}`, data);
}
export function getPropertyManager() {
    return http().get('/get-properties-manager');
}
export function loadPropertyManager(nextPage) {
    return http().get(`get-properties-manager?page=${nextPage}`);
}
export function getAllProperties(id) {
    return http().get(`/get-all-properties-manager/${id}`);
}
export function getPendingProperty(){
    return http().get('/pending-property-manager');
}
// export function loadPendingProperty(nextPage) {
//     return http().get(`pending-property-manager?page=${nextPage}`);
// }
export function approvedProperty(id){
    return http().post(`/property-approved-manager/${id}`);
}
export function getAllFavouritedProperty(){
    return http().get('/get-All-Favourited-Property-manager');
}
export function commentedPropertyCount(){
    return http().get('/get-commented-property-count');
}
export function getPenddingRentProperty(){
    return http().get('/get-pendding-property-count');
}
export function getCommentsCount(){
    return http().get('/get-commented-property-count');
}
export function getCommentedProperty(){
    return http().get('/get-notification-commented')
}
export function loadReservedProperty(nextPage) {
    return http().get(`show-all-reserved-property-manager?page=${nextPage}`);
}
export function loadFavouritedProperty(nextPage) {
    return http().get(`get-All-Favourited-Property-manager?page=${nextPage}`);
}

export function sendManager(data){
    return http().post('/send-manager',data);
}
export function getManager(){
    return http().get('/get-managers');
}
export function seenProperty(id){
    return http().post(`/properties-seen/${id}`);
}
export function PropertyHot(id){
    return http().post(`/property-hot-manager/${id}`);
}
export function getEngagedProperty(){
    return http().get('/get-engaged-property-manager');
}
export function getFavouritedProperty(){
    return http().get('/get-favourited-property');
}
export function getAreaManagerData(){
    return http().get('/get-managers');
}
export function getAreaManager(request) {
    return http().get('/get-area-managers-data',request);
}
export function createAreaEmployee(data) {
    return http().post('/area_employees',data);
}
export function getAreaEmployee() {
    return http().get('/area_employees');
}
export function getAreaEmployeeData(request) {
    return http().get('/get-area-employee-data' , request);
}