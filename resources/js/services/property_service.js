import { http, httpFile } from './http_service';
export function createPropertyType(data) {
    return http().post('/propertytypes',data);
}
export function getPropertyType() {
    return http().get('/propertytypes');
}
export function loadProperty(nextPage) {
    return http().get(`propertytypes?page=${nextPage}`);
}
export function searchProperties(request) {
    return http().post('/search-property-type',request);
}
export function updatePropertyType(id , data){
    return http().put(`/propertytypes/${id}`, data);
}
export function deletePropertyType(id){
    return http().delete(`/propertytypes/${id}`);
}
