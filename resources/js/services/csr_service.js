import { http, httpFile } from './http_service';
export function totalProperty(){
    return http().get('/property-count');
}
export function totalReserved(){
    return http().get('/reserved-property-count');
}
export function totalPendding(){
    return http().get('/pendding-property-count');
}
export function totalRunningProperty(){
    return http().get('/running-property-count');
}
export function totalfavouritedProperty(){
    return http().get('/running-favourited-count');
}
export function totalPropertyRent(){
    return http().get('/property-rent-count');
}
export function totalPaidRent(){
    return http().get('/paid-rent-count');
}
export function totalPenddingRent(){
    return http().get('/pendding-rent-count');
}
export function getFavouritedProperty(){
    return http().get('/get-favourited-list');
}
export function ForwardToManager(id){
    return http().post(`/property-forword/${id}`);
}
export function approvedProperty(id){
    return http().post(`/property-approved-csr/${id}`);
}
export function getPendingPropertyCsr(){
    return http().get('/pending-property-csr');
}
export function PropertyHot(id){
    return http().post(`/property-hot-csr/${id}`);
}
export function unPaidPropertyRent(id){
    return http().post(`/property-un-paid-rent-csr/${id}`)
}
export function getLandlord(id) {
    return http().get(`/get-all-landlord-csr/${id}`);
}
export function searchProperty(request , id) {
    return http().post(`/search-all-properties-csr/${id}`,request);
}