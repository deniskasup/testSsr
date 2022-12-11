import { defineNuxtPlugin } from 'nuxt/app'
import axios from 'axios';
import { API_PATH } from "~/api/constants";
import { DependencyName } from "~/enums/DependencyName";

const httpClient = axios.create({
    baseURL: API_PATH,
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide(DependencyName.HTTP_CLIENT, httpClient);
});