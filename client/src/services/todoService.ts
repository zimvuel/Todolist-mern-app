import axios from "axios";
import type { TodoStatusUpdate, TodoTitleUpdate } from "../types/CardTypes";

const API_URL = import.meta.env.VITE_API_URL + "/todolist";

const todoApi = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

export const updateTodoTitleApi = async ({id, title} : TodoTitleUpdate) => {
    return await todoApi.put(`/${id}`, {title: title});
}

export const updateTodoStatusApi = async ({id, status} : TodoStatusUpdate) => {
    return await todoApi.put(`/${id}`, {status: status});
}

export const deleteTodoApi = async (id : string) => {
    return await todoApi.delete(`/${id}`);
}

export const getTodoApi = async (id : string) => {
    return await todoApi.get(`/${id}`);
}

export const getTodoListApi = async () => {
    return await todoApi.get(`/`);
}

export const postTodoApi = async (title : string) => {
    return await todoApi.post(`/`, {title: title});
}