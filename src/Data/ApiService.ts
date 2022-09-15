import axios, { AxiosResponse } from "axios";
import { todoType } from "./useAxios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL ,
    timeout: 5000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    // get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
    // put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    // delete: (url: string) => instance.delete(url).then(responseBody),
};

const TodoData = {
    // getPosts: (): Promise<todoType[]> => requests.get("products"),
    // getAPost: (id: number): Promise<todoType> => requests.get(`products/${id}`),
    createTodo: (post: todoType): Promise<todoType> => requests.post("posts", post),
    // updatePost: (post: todoType, id: number): Promise<todoType> => requests.put(`product/${id}`, post),
    // deletePost: (id: number): Promise<void> => requests.delete(`product/${id}`),
};

export default TodoData;
