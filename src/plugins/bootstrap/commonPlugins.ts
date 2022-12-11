import { defineNuxtPlugin } from 'nuxt/app'
import axiosPlugin from '~/plugins/common/axiosPlugin'

export default defineNuxtPlugin((ctx) => {
    axiosPlugin(ctx);
});