import axios from "axios";
const instance = axios.create({
    //base url
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    //custom header
    headers: { 'X-Custom-Header': 'foobar' }
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.data) return response.data;
    return response;
}, function (error) {
    if (error?.response?.data) return error?.response?.data;
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


export default instance