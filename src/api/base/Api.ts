import { ApiDependencies } from './interfaces/ApiDependencies'
import { AxiosInstance, AxiosRequestConfig } from "axios";

export class Api {
    httpClient: AxiosInstance

    constructor(dependencies: ApiDependencies) {
        this.httpClient = dependencies.httpClient;
    }

    async get(path: string, params?: AxiosRequestConfig) {
        return this.httpClient.get(path, params);
    }

    async post(path: string, data?: Record<string, unknown>, params?: AxiosRequestConfig) {
        return this.httpClient.post(path, data, params);
    }
}