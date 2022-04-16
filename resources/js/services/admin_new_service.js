import { http, httpFile } from './http_service';
// remove from Admin Dashboard
export function getProperty() {
    return http().get('/properties');
}
export function loadProperty(nextPage) {
    return http().get(`properties?page=${nextPage}`);
}
export function createAreaManager(data) {
    return http().post('/area_managers',data);
}
export function createAreaEmployee(data) {
    return http().post('/area_employees',data);
}
export function deleteEmployee(id){
    return http().delete(`/area_employees/${id}`);
}
export function getAreaManaer(){
    return http().get('/area_managers');
}
export function getAreaEmployee() {
    return http().get('/area_employees');
}
export function getAllLandloard(){
    return http().get('/show-all-landloard');
}

export function loadLandlords(nextPage) {
    return http().get(`show-all-landloard?page=${nextPage}`);
}

export function getManager(){
    return http().get('/get-managers');
}
export function getEmployee(){
    return http().get('/get-employees');
}
