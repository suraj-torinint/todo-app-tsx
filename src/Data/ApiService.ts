import axios, { AxiosResponse } from "axios";
import { todoType } from "./useAxios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL ,
    timeout: 5000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
};

const TodoData = {
    getTodos: (): Promise<todoType[]> => requests.get("todos"),
    getATodo: (id: number): Promise<todoType> => requests.get(`todos/${id}`),
    createTodo: (post: todoType): Promise<todoType> => requests.post("todos", post),
};

export default TodoData;
