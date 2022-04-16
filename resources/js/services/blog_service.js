import {http , httpFile} from './http_service';
export function createBlog(data){
   return httpFile().post('/blogs',data);
}
export function getBlog(){
    return http().get('/get-blogs')
}
export function loadBlog(nextPage) {
    return http().get(`blogs?page=${nextPage}`);
}
export function deleteBlog(id){
    return http().delete(`/blogs/${id}`);
}
export function updateBlog(id , data){
    return httpFile().post(`/blogs/${id}`, data);
}