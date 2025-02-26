import Axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

// Axios instances
const axios = Axios.create({
    withCredentials: false,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*'
    },
    baseURL: baseURL
});

export const csrf = () => axios.get(baseURL + '/sanctum/csrf-cookie')

export default axios;