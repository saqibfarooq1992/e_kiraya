import { http, httpFile } from './http_service';
export function getUser(){
    return http().get('/users')
}
export function getCity(){
    return http().get('/cities')
}
export function createManager(data) {
    return httpFile().post('/users',data);
}
export function updateUser(id , data){
    return http().put(`/users/${id}`, data);
}
export function deleteUser(id){
    return http().delete(`/users/${id}`);
}
export function searchUser(request) {
    return http().post('/search-user',request);
}
export function loadUser(nextPage) {
    return http().get(`users?page=${nextPage}`);
}
export function approvedUser(id){
    return http().post(`/users/${id}`);
}
export function getAllUser(){
    return http().get('/all-users')
}
export function getRenter(){
    return http().get('/get-renter')
}
export function getLandloard(){
    return http().get('/get-landloard')
}
export function loadAllUser(nextPage) {
    return http().get(`all-users?page=${nextPage}`);
}
export function createEmployee(data) {
    return httpFile().post('/users',data);
}
export function getEmployee(){
    return http().get('/get-employee')
}
export function getCsr(){
    return http().get('/get-csr-account')
}
export function contactUs(contact) {
    return http().post('/contacts',contact);
}
export function getLandlord(id) {
    return http().get(`/get-all-landlord-admin/${id}`);
}
