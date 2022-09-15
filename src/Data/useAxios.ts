import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export interface todoType {
    id?: number;
    title: string;
    body: string;
}


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
