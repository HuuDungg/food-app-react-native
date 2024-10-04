import axios from "axios";
const instance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: { 'X-Custom-Header': 'foobar' }
});

export default instance