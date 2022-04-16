import { http, httpFile } from './http_service';

export function createAreaManager(data) {
    return http().post('/managers',data);
}
export function getAreaManager(){
    return http().get('/managers');
}
export function getManager(){
    return http().get('/get-managers');
}
export function getEmployee(){
    return http().get('/get-employee');
}
export function getCity(){
    return http().get('/get-city');
}
export function getSector(request){
    return http().get('/get-sectors',request);
}
export function deleteAreaManager(id){
    return http().delete(`/managers/${id}`);
}
export function updateAreaManager(id,data){
    return http().put(`/managers/${id}`,data);
}
