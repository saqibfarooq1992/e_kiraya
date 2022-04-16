import { http, httpFile } from './http_service';

export function newLessonStore(data) {
    return http().post('/create_lessons', data);
}

export function getLesson() {
    return http().get('/create_lessons');
}

export function updateLesson(id, data) {
    return http().put(`/create_lessons/${id}`, data);
}

export function deleteLesson(id) {
    return http().delete(`/create_lessons/${id}`);
}



