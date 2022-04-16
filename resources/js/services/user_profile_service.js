import { http, httpFile } from './http_service';

export function updateProfile(data) {
    return httpFile().post('/user-profiles', data);
}

export function getData() {
    return http().get('/user-data');
}




