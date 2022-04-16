import { http, httpFile } from './http_service';
export function getReservedProperty(){
    return http().get('/reserved-property-list')
}
export function deleteReservedProperty(id){
    return http().delete(`/reserveds/${id}`);
}
export function loadProperty(nextPage) {
    return http().get(`engaged-properties?page=${nextPage}`);
}
export function searchEngagedProperty(request) {
    return http().post('/search-engaged-property',request);
}
