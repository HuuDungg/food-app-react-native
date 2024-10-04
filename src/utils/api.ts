import axios from "./axios.custom";
const url = '/api/v1/auth/register'
const registerApi = async (email: string, password: string, name: string) => {
    return await axios.post(url, { email, password, name });
}


export { registerApi }