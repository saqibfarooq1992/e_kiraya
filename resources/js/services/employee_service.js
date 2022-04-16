import { http, httpFile } from './http_service';
// export function getUser(){
//     return http().get('/employees')
// }
export function getCity(){
    return http().get('/get-city')
}
// export function createEmployee(data) {
//     return httpFile().post('/employees',data);
// }
export function updateEmployee(id , data){
    return http().put(`/employees/${id}`, data);
}
export function deleteEmployee(id){
    return http().delete(`/users/${id}`);
}
export function searchUser(request) {
    return http().post('/search-user',request);
}
export function loadUser(nextPage) {
    return http().get(`employees?page=${nextPage}`);
}
export function approvedUser(id){
    return http().post(`/users/${id}`);
}
export function getAllUser(){
    return http().get('/all-users')
}
export function getAllLatestProperty(){
    return http().get('/all-latest-property-count')
}
export function getAllOldProperty(){
    return http().get('/all-old-property')
}
export function getAllPaidRentProperty(){
    return http().get('/all-paid-property')
}
export function getAllPenddingRentProperty(){
    return http().get('/all-pendding-property')
}
export function getTotalProperty(){
    return http().get('/get-total-property')
}
export function loadAllUser(nextPage) {
    return http().get(`all-users?page=${nextPage}`);
}
export function getProperty(){
    return http().get('/get-property-for-employee')
}
export function getOldProperty(){
    return http().get('/get-old-property-for-employee')
}
export function getPendingRentList(){
    return http().get('/get-pendding-rent-list-for-employee');
}
export function loadProperty(nextPage) {
    return http().get(`get-pendding-rent-list-for-employee?page=${nextPage}`);
}
export function getPaidRentList(){
    return http().get('/get-paid-rent-list-for-employee');
}
export function loadPaidProperty(nextPage) {
    return http().get(`get-paid-rent-list-for-employee?page=${nextPage}`);
}
export function loadLatestProperty(nextPage) {
    return http().get(`get-property-for-employee?page=${nextPage}`);
}
export function getPendingPropertyList(){
    return http().get('/get-pendding-property-list-for-employee');
}
export function loadPendingPropertyList(nextPage) {
    return http().get(`get-pendding-property-list-for-employee?page=${nextPage}`);
}
export function getReservedPropertyList(){
    return http().get('/get-reserved-property-list-for-employee');
}
export function loadReservedPropertyList(nextPage) {
    return http().get(`get-reserved-property-list-for-employee?page=${nextPage}`);
}
export function approvedProperty(id){
    return http().post(`/property-approved-employee/${id}`);
}
export function getPendingProperty(){
    return http().get('/pending-property-employee');
}
export function getAreaEmployee(){
    return http().get('/employees');
}
export function getEmployee(){
    return http().get('/get-employees');
}
export function sendEmployee(data){
    return http().post('/send-employee',data);
}
export function commentedProperty(){
    return http().get('/get-commented-property');
}
export function loadCommentedProperty(nextPage) {
    return http().get(`get-commented-property?page=${nextPage}`);
}
export function PropertyHot(id){
    return http().post(`/property-hot-employee/${id}`);
}
export function getReservedProperty(){
    return http().get('/engaged-properties-employee')
}
