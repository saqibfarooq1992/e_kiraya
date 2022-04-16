import { http, httpFile } from './http_service';

export function createCity(data) {
    return http().post('/cities',data);
}
export function getCity(){
    return http().get('/cities')
}
export function deleteCities(id){
    return http().delete(`/cities/${id}`);
}
export function updateCites(id , data){
    return http().put(`/cities/${id}`, data);
}
export function loadCity(nextPage) {
    return http().get(`cities?page=${nextPage}`);
}
export function searchCities(request) {
    return http().post('/search-cities',request);
}
