import { http, httpFile } from './http_service';
export function getFooter() {
    return http().get('/footers');
}