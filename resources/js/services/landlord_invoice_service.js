import { http, httpFile } from './http_service';
export function getProperty() {
    return http().get('/get-landlord-property');
}
