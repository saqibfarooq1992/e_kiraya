import { http, httpFile } from './http_service';
export function createFaq(data) {
    return http().post('/faqs',data);
}
export function getFaq() {
    return http().get('/faqs');
}
export function updateFaq(id , data){
    return http().put(`/faqs/${id}`, data);
}
export function deleteFaq(id){
    return http().delete(`/faqs/${id}`);
}
export function searchFaq(request) {
    return http().post('/search-faq',request);
}
export function loadFaqData(nextPage) {
    return http().get(`faqs?page=${nextPage}`);
}