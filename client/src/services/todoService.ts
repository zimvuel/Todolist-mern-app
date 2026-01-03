import axios from "axios";
import type { TodoStatusUpdate, TodoTitleUpdate } from "../types/CardTypes";

const API_URL = "http://localhost:5001/api/todolist";

export const updateTodoTitleApi = async ({id, title} : TodoTitleUpdate) => {
    return await axios.put(`${API_URL}/${id}`, {title: title});
}

export const updateTodoStatusApi = async ({id, status} : TodoStatusUpdate) => {
    return await axios.put(`${API_URL}/${id}`, {status: status});
}

export const deleteTodoApi = async (id : string) => {
    return await axios.delete(`${API_URL}/${id}`);
}

export const getTodoApi = async (id : string) => {
    return await axios.get(`${API_URL}/${id}`);
}

export const getTodoListApi = async () => {
    return await axios.get(`${API_URL}`);
}

export const postTodoApi = async (title : string) => {
    return await axios.post(`${API_URL}`, {title: title});
}