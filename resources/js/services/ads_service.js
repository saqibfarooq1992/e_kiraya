import {http , httpFile} from './http_service';

export function createAdvertisment(data) {
    return httpFile().post('/advertisements',data);
}
export function getAds() {
    http().get('/advertisements');
}

// export function updateAdvertisement(id,data) {
//     return httpFile().post(`advertisement/${id}`, data);
// }
