import Axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

// Axios instances
const axios = Axios.create({
    withCredentials: false,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    baseURL: baseURL
});

export default axios;