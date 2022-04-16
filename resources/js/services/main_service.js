import { http, httpFile } from './http_service';

export function getCities(){
    return http().get('/get-cities')
}
export function getAbout(){
    return http().get('/about-us')
}
export function getUser(){
    return http().get('/get-team-member')
}
export function getFaq(){
    return http().get('/faqs')
}
export function getHeader(){
    return http().get('/headers')
}
export function getCountData(){
    return http().get('/get-count-data')
}

export function getPropertyType(){
    return http().get('/get-pro')
}
export function getProperty(){
    return http().get('/get-properties-front')
}
export function getPopularProperties(){
    return http().get('/get-popular-properties')
}
export function getCity(){
    return http().get('/get-cities-front')
}
export function getSector(request){
    return http().get('/get-sector-front',request)
}
export function loadSector(nextPage) {
    return http().get(`get-sector-front?page=${nextPage}`);
}
export function getProperties(){
    return http().get('/get-property-front')
}
export function myads(){
    return http().get('/get-myads')
}
export function favourite(data) {
    return http().post('/favourite', data);
}
export function hotFavourite(data) {
    return http().post('/favourite', data);
}
export function like(data) {
    return http().post('/like', data);
}
export function hotlike(data) {
    return http().post('/like', data);
}
export function unLike(data) {
    return http().post('/un-like', data);
}
export function hotUnLike(data) {
    return http().post('/un-like', data);
}
// export function reservedProperty(data) {
//     return http().post('/property-reserved', data);
// }
export function hotUnFavourite(data) {
    return http().post('/un-favourite', data);
}
export function unFavourite(data) {
    return http().post('/un-favourite', data);
}
export function getFavouriteProperty(){
    return http().get('/get-favourite-properties')
}
export function getPropertyDetail(slug){
    return http().get(`/get-property-details/${slug}`)
}
export function searchProperty(request) {
    return http().post('/search-property',request);
}
// export function mouseOver(data) {
//     return http().post("mouse-over", data);
// }
export function visitProperty(data) {
    return http().post("/visit-property", data);
}
export function getHotProperty(){
    return http().get('/get-property-hot')
}
export function getTop(data) {
    return http().post("/top-property", data);
}
// export function reservedProperty(id){
//     return http().post(`/property-reserved/${id}`);
// }
export function loadProperty(nextPage) {
    return http().get(`get-properties-front?page=${nextPage}`);
}
export function recommendedProp(id){
    return http().post(`/recommended-properties/${id}`);
}
export function loadrecommendedProp(nextPage) {
    return http().get(`recommended-properties?page=${nextPage}`);
}
// export function recommendedProperty(id){
//     return http().post(`/recommended-properties/${id}`);
// }
export function updateReservedProperty(data) {
    return http().post('/property-reserved-update', data);
}

export function subscriber(data) {
    return http().post('/subscribers',data);
}
export function getSubscriber() {
    return http().get('/subscribers');
}
export function deletSubsciber(id){
    return http().delete(`/subscribers/${id}`);
}
