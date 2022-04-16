import { http, httpFile } from './http_service';

export function getProperty() {
    return http().get('/get-renter-invoice');
}
export function getPropertyTypeLandlord() {
    return http().get('/get-landlord-property-type');
}
export function getRenty() {
    return http().get('/get-renty-data');
}
export function getlandlord() {
    return http().get('/get-landlord-data');
}
export function getPaidRent() {
    return http().get('/renterinvoices');
}
export function getRenterProperty() {
    return http().get('/get-property-reserved');
}
export function getLandlordProperty() {
    return http().get('/get-landlord-property');
}
export function getPropertytype() {
    return http().get('/get-renter-property-type');
}
export function getTotalRent() {
    return http().get('/get-total-rent');
}
export function createInvoice(data) {
    return http().post('/renterinvoices',data);
}
export function createLandlordInvoice(data) {
    return http().post('/landlordinvoices',data);
}
export function getlandlordinvoice() {
    return http().get('/landlordinvoices');
}
export function getPropertyInvoice(id) {
    return http().get(`/get-property-invoice/${id}`);
}
export function getLandlordPropertyInvoice(id) {
    return http().get(`/get-landlord-property-invoice/${id}`);
}
export function deleteInvoice(id) {
    return http().delete(`/renterinvoices/${id}`);
}
export function deletelandlordInvoice(id) {
    return http().delete(`/landlordinvoices/${id}`);
}
export function updateInvoice(id , data){
    return http().put(`/renterinvoices/${id}`, data);
}
export function updateLandlordInvoice(id , data){
    return http().put(`/landlordinvoices/${id}`, data);
}
export function loadInvoice(nextPage) {
    return http().get(`get-property-reserved?page=${nextPage}`);
}
export function searchRenterInvoice(request) {
    return http().post('/search-renter-invoice',request);
}
export function searchLandlordInvoice(request) {
    return http().post('/search-landlord-invoice',request);
}
export function loadLandlordInvoice(nextPage) {
    return http().get(`get-landlord-property?page=${nextPage}`);
}
