import { http, httpFile } from './http_service';
export function getHeader(){
    return httpFile().get('/headers')
}
export function updateHeader(id, data){
    return httpFile().post(`/headers/${id}`, data);
}