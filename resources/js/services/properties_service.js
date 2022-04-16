import { http, httpFile } from './http_service';
export function getProTypeData() {
    return http().get('/property');
}
export function getCity() {
    return http().get('/cities');
}
export function getSectors(request) {
    return http().get('/get-sectors',request);
}
export function getSector(request) {
    return http().get('/get-sectors',request);
}
export function getSectorEmployee(request) {
    return http().get('/get-sectors',request);
}
export function getSectorUpdate(request) {
    return http().get('/get-sectors-update',request);
}
export function createProperty(data) {
    return http().post('/properties',data);
}
export function getProperty() {
    return http().get('/properties');
}
export function allPropertyRent(){
    return http().get('/all-property-rent');
}

export function getAllProperties(id) {
    return http().get(`/get-all-properties/${id}`);
}
export function getInvoiceData(id) {
    return http().get(`/get-invoice-data/${id}`);
}
export function getProperties() {
    return http().get('/get-properties');
}
export function getUser() {
    return http().get('/get-user');
}
export function deleteProperty(id){
    return http().delete(`/properties/${id}`);
}
export function updateProperty(id , data){
    return httpFile().post(`/properties/${id}`, data);
}
export function assignProperty(id , data){
    return httpFile().post(`/assign-property/${id}`, data);
}
export function getRules() {
    return http().get('/rules');
}
export function loadProperty(nextPage) {
    return http().get(`properties?page=${nextPage}`);
}
export function loadReservedProperty(nextPage) {
    return http().get(`reserved-property-csr?page=${nextPage}`);
}
export function loadRule(nextPage) {
    return http().get(`rules?page=${nextPage}`);
}
export function approvedProperty(id){
    return http().post(`/property-approved/${id}`);
}
export function paidPropertyRent(id){
    return http().post(`/property-paid-rent/${id}`);
}

export function PropertyOk(id){
    return http().post(`/property-running/${id}`);
}

export function PropertyHot(id){
    return http().post(`/property-hot/${id}`);
}

export function reloadProperty(id){
    return http().post(`/reload/${id}`);
}
export function seenProperty(id){
    return http().post(`/properties-seen/${id}`);
}

export function searchSector(request , id) {
    return http().post(`/search-sectors/${id}`, request);
}
export function searchProperty(request , id) {
    return http().post(`/search-all-properties-admin/${id}`,request);
}
export function ReservedProperty(){
    return http().get('/reserved-property-csr')
}
export function suspendedProperty(id){
    return http().post(`/suspended-property/${id}`)
}
export function getEngagedProperty(){
    return http().get('/engaged-property-csr')
}
export function loadEngagedProperty(nextPage) {
    return http().get(`engaged-property-csr?page=${nextPage}`);
}
export function getpaidPropteryRent(){
    return http().get('/paid-property-csr')
}
export function loadPaidProperty(nextPage) {
    return http().get(`paid-property-csr?page=${nextPage}`);
}
export function getUnpaidPropteryRent(){
    return http().get('/un-paid-property-csr')
}
export function loadUnPaidProperty(nextPage) {
    return http().get(`un-paid-property-csr?page=${nextPage}`);
}
export function getManager(){
    return http().get('/get-managers');
}
export function createAreaManager(data) {
    return http().post('/area_managers',data);
}
export function getAreaManaer(){
    return http().get('/area_managers');
}
// export function getManagerData(){
//     return http().get('/get-managers-data');
// }
export function getAreaManager(request) {
    return http().get('/get-area-managers',request);
}
export function assignPropertyData(data){
    return http().post('/send-manager',data);
}
export function assignPropertyEmployee(data){
    return http().post('/send-employee-admin',data);
}
export function assignPropertyToTenant(data){
    return http().post('/tenants',data);
}
export function getEmployee(data) {
    return http().post('/get-employees',data);
}
// export function searchProperty(request) {
//     return http().post('/search-properties-admin',request);
// }
export function ReservationCancell(id){
    return http().post(`/property-reservation/${id}`);
}
export function getManagerData(id){
    return http().post(`/get-managers-data-csr/${id}`);
}
