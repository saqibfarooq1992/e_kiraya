import { http, httpFile } from './http_service';
export function getAbout() {
    return http().get('/abouts');
}

export function updateAbout(id,data) {
    return httpFile().post(`abouts/${id}`, data);
}