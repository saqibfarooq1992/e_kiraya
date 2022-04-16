import { http, httpFile } from './http_service';
export function getUserName() {
    return http().get('/get-user-notifcation');
}
export function getPropertiesType() {
    return http().get('/get-property-type');
}

export function createNotification(data) {
    return http().post('/leaseterminations',data);
}
export function getLeaseTermination() {
    return http().get('/leaseterminations');
}
export function deleteLeasetTermination(id) {
    return http().delete(`/leaseterminations/${id}`);
}
export function rePostLeasetTermination(id) {
    return http().post(`/re-post/${id}`);
}

