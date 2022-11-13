// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: 'src/',
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },
    typescript: {
        strict: true,
    },
    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-icon', '@nuxt/image-edge'],
    css: ['@/assets/styles/main.sass'],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: `
                        @import "@/assets/styles/components/_variables.sass"
                        @import "@/assets/styles/components/_utils.sass"
                    `,
                },
            },
        },
    },
})
