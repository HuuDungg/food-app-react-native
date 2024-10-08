import axios from 'axios';
declare module 'axios' {
    export interface AxiosResponse<T = any> extends Promise<T> { }
}
export { };
declare global {
    interface IBackendRes<T> {
        error?: string | string[];
        message: string;
        statusCode: number | string;
        data?: T;
    }


    interface IRegister {
        _id: string;
    }
}


