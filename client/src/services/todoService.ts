import axios from "axios";
import type { TodoStatusUpdate, TodoTitleUpdate } from "../types/CardTypes";

const API_URL = "http://localhost:5001/api/todolist";

const todoApi = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

export const updateTodoTitleApi = async ({id, title} : TodoTitleUpdate) => {
    return await todoApi.put(`${API_URL}/${id}`, {title: title});
}

export const updateTodoStatusApi = async ({id, status} : TodoStatusUpdate) => {
    return await todoApi.put(`${API_URL}/${id}`, {status: status});
}

export const deleteTodoApi = async (id : string) => {
    return await todoApi.delete(`${API_URL}/${id}`);
}

export const getTodoApi = async (id : string) => {
    return await todoApi.get(`${API_URL}/${id}`);
}

export const getTodoListApi = async () => {
    return await todoApi.get(`${API_URL}`);
}

export const postTodoApi = async (title : string) => {
    return await todoApi.post(`${API_URL}`, {title: title});
}