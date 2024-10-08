import axios from "./axios.custom";

const registerApi = async (email: string, password: string, name: string) => {
    return await axios.post<IBackendRes<IRegister>>(
        '/api/v1/auth/register',
        { email, password, name }
    );
}

const verifyCodeApi = async (email: string, code: string) => {
    return axios.post<IBackendRes<IRegister>>(
        '/api/v1/auth/verify-code',
        {
            email,
            code
        }
    )
}

const resendCode = async (email: string) => {
    return axios.post<IBackendRes<IRegister>>(
        '/api/v1/auth/verify-email',
        {
            email
        }
    )
}

const loginApi = async (username: string, password: string) => {
    return axios.post<IBackendRes<IRegister>>('/api/v1/auth/login', {
        username,
        password
    });
}

export { registerApi, verifyCodeApi, resendCode, loginApi }