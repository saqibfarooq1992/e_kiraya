import { http, httpFile } from './http_service';
export function getTotalPorperty() {
    return http().get('/total-property-landlord');
}
export function getProperties(){
    return http().get('/get-properties-landlord');
}
export function loadProperties(nextPage) {
    return http().get(`get-properties-landlord?page=${nextPage}`);
}
export function searchInvoiceQuery(request) {
    return http().post('/search-properties-landlord-invoice',request);
}
export function getTotalRentCount(){
    return http().get('/show-all-rent-landlord');
}
export function getProperty(){
    return http().get('/get-property-landlord');
}
export function loadProperty(nextPage) {
    return http().get(`get-property-landlord?page=${nextPage}`);
}
export function searchProperty(request) {
    return http().post('/search-properties-landlord',request);
}
export function searchReact(request) {
    return http().post('/search-react-landlord',request);
}





export function getListTotalPorperty() {
    return http().get('/get-property');
}
export function getTotalReserved() {
    return http().get('/total-reserved');
}
export function getPendingProperty() {
    return http().get('/get-total-pending-property');
}
export function getPenddingProperty() {
    return http().get('/get-pending-property-list-landlord');
}
export function getEngagedProperty() {
    return http().get('/search-invoice-properties-admin');
}
export function getFavouritedProperty() {
    return http().get('/total-favourited-property');
}
export function getTotalRentProperty() {
    return http().get('/total-properties-rent-landlord');
}
export function getPaidRent() {
    return http().get('/total-paid-rent');
}
export function getPendingRent() {
    return http().get('/total-un-paid-rent');
}
export function ReservedProperty() {
    return http().get('/get-reserved-property-landloard');
}

// export function searchInvoiceQuery(request) {
//     return http().post('/search-invoice-properties-admin',request);
// }
export function loadInvoiceProperty(nextPage) {
    return http().get(`search-invoice-properties-admin?page=${nextPage}`);
}

export function loadPendingProperty(nextPage) {
    return http().get(`get-pending-property?page=${nextPage}`);
}
export function getPendingRentList() {
    return http().get('/get-pending-property-rent');
}
export function loadUnPaidProperty(nextPage) {
    return http().get(`get-pending-property-rent?page=${nextPage}`);
}
export function getEngagedProperties(){
    return http().get('/engaged-properties-landlord')
}
export function getReservedProperty(){
    return http().get('/reserved-properties-landlord')
}
export function getAllFavouritedProperty(){
    return http().get('/get-All-Favourited-Property-landlord');
}
export function loadReservedProperty(nextPage) {
    return http().get(`reserved-properties-landlord?page=${nextPage}`);
}
export function unPaidPropertyRent(id){
    return http().post(`/property-un-paid-rent/${id}`)
}
export function getAllLikedProperty(){
    return http().get('/get-all-liked-property-landlord');
}
export function getLikedProperty() {
    return http().get('/total-liked-property');
}
// export function searchReact(request) {
//     return http().post('/search-react',request);
// }
