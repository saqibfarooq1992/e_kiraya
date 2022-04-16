import { http, httpFile } from './http_service';
export function getReservedProperty(){
    return http().get('/reserved-property-list')
}
export function getFavourit(){
    return http().get('/get-All-Favourited-Property-tenant');
}
export function loadFavouritedProperty(nextPage) {
    return http().get(`get-All-Favourited-Property-tenant?page=${nextPage}`);
}
export function getLiked() {
    return http().get('/get-all-liked-property-tenant');
}
export function loadLikedProperty(nextPage) {
    return http().get(`get-all-liked-property-tenant?page=${nextPage}`);
}
export function getEngaged() {
    return http().get('/get-all-engaged-property');
}
export function getTotalRentCount(){
    return http().get('/show-all-rent-tenant');
}
// export function ReservedProperty() {
//     return http().get('/get-reserved-property-landloard');
// }
