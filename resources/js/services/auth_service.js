import store from '../store';
import { http, httpFile } from './http_service';
import jwt from 'jsonwebtoken';

export function register(user) {
    return httpFile().post('/auth/register', user);
}

export function login(user) {
    return http().post('/auth/login', user)
    .then(res => {
        if (res.status === 200) {
            setToken(res.data);
        }
        return res;
    });
}

function setToken(data) {
    const token = generateJWT(data);
    localStorage.setItem('e-learning-softgear-2020', token);
    store.dispatch('authenticate', data.user);
}

function generateJWT(data) {
    return jwt.sign({user: data}, 'cq27f4fc3d7755961ce9com4ab143c86d324bf294178combysoftgear2020');
}

export function isLoggedIn() {
    const token = localStorage.getItem('e-learning-softgear-2020');
    return token != null;
}

function decodeToken() {
    const token = getToken();
    if (!token) {
        return null;
    }
    return jwt.decode(token);
}

export function getUserProfile() {
    const token = decodeToken();
    if (!token) {
        return null;
    }

    return token.user.user;
}

export function getUserRole() {
    const token = decodeToken();
    if (!token) {
        return null;
    }
    return token.user.user.role;
}

function getToken() {
    return localStorage.getItem('e-learning-softgear-2020');
}

export function getProfile() {
    return http().get('/auth/profile');
}

export function getAccessToken() {
    const token = decodeToken();
    if (!token) {
        return null;
    }
    return token.user.access_token;
}

export function logout() {
    http().get('/auth/logout');
    localStorage.removeItem('e-learning-softgear-2020');
    store.dispatch('authenticate');
}

export function changePassword(password) {
    return http().post('/change-password', password);
}

export function updateProfile(profile) {
    return httpFile().post('/update-profile', profile);
}
export function updateImage(profile){
    return httpFile().post('/update-profile' , profile);
}

export function resetPasswordRequest(user) {
    return http().post('/auth/reset-password-request', user);
}
export function resetPassword(user) {
    return http().post('/auth/reset-password', user);
}
export function updateLandlordProfile(id ,data) {
    return httpFile().post(`/update-profile-admin/${id}`, data);
}
