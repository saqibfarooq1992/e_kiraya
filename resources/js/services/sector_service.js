import {http , httpFile} from './http_service';
// export function getCity() {
//     return http().get('/get-city');
// }
export function createSector(data) {
    return http().post('/sectors' , data);
}
export function getSector() {
    return http().get('/sectors');
}
export function updateSector(id , data){
    return http().put(`/sectors/${id}`, data);
}
export function deleteSector(id){
    return http().delete(`/sectors/${id}`);
}
export function loadSector(nextPage) {
    return http().get(`sectors?page=${nextPage}`);
}
export function searchSectors(request) {
    return http().post('/search-sectors-admin',request);
}
