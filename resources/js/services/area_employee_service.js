import {http, httpFile } from './http_service';

export function createAreaEmployee(data) {
    return http().post('/employees',data);
}
export function getAreaEmployee(){
    return http().get('/employees');
}
export function updateAreaEmployee(id , data){
    return http().put(`/employees/${id}`, data);
}
export function deleteAreaEmployee(id){
    return http().delete(`/employees/${id}`);
}
// export function getEmployee(){
//     return http().get('/get-managers');
// }
export function getEmployee(){
    return http().get('/get-employee');
}
export function getCity(){
    return http().get('/get-city');
}
export function getSector(request){
    return http().get('/get-sector', request);
}
export function deleteAreaManager(id){
    return http().delete(`/managers/${id}`);
}
