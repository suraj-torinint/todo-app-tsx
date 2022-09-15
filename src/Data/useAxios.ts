import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

// const useAxios = (method: string, url: string, requestConfig: {}) => {
//     method = method.toLowerCase()
//     const [response, setResponse] = useState<AxiosResponse>();
//     const [error, setError] = useState<AxiosError>();
//     const [loading, setLoading] = useState(true);

//     const controller = new AbortController();
//     const fetchdata = async () => {
//         try {
//             const res = await axios[method](url, {
//                 requestConfig,
//                 signal: controller.signal,
//             });
//             console.log(res);
//             setResponse(res.data);
//         } catch (error) {
//             setError(error);
//         } finally {
//             setLoading(false);
//         }
//     };
//     useEffect(() => {
//         fetchdata();

//         return () => {
//             controller.abort();
//         };
//     }, []);

//     return [response, error, loading];
// };

export interface todoType {
    id: number;
    title: string;
    completed: boolean;
}

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const useAxios = (axiosParams: AxiosRequestConfig) => {
    const [response, setResponse] = useState<todoType[]>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(true);

    const fetchData = async (axiosParams: AxiosRequestConfig) => {
        try {
            const result = await axios.request(axiosParams);
            setResponse(result.data);
        } catch (err: any) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(axiosParams);
    },[axiosParams]);

    return { response, error, loading };
};

export default useAxios;
