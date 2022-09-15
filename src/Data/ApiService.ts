import Axios, { AxiosResponse } from "axios";

const axios = Axios.create({
    baseURL : process.env.REACT_APP_BASE_URL,
    timeout : 5000
})

