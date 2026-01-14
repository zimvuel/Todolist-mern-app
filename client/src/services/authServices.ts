import axios from "axios";
import type { LoginParams, RegisterParams } from "../types/CardTypes";

const API_URL = "http://localhost:5001/api/auth";

const authApi = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

export const registerApi = async (data: RegisterParams) => {
    return await authApi.post('register', data);
}

export const loginApi = async (data: LoginParams) => {
    return await authApi.post('login', data);
}

export const logoutApi = async () => {
    return await authApi.post('logout');
}