import { http, httpFile } from './http_service';
export function createRule(data) {
    return http().post('/rules',data);
}
export function getRule() {
    return http().get('/rules');
}
export function deleteRule(id){
    return http().delete(`/rules/${id}`);
}
export function updateRule(id , data){
    return http().put(`/rules/${id}`, data);
}
export function loadRule(nextPage) {
    return http().get(`rules?page=${nextPage}`);
}
export function searchRule(request) {
    return http().post('/search-rules',request);
}