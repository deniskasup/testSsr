// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: 'src/',
    app: {
        head: {
            link: [
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/assets/favicon/apple-touch-icon.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/assets/favicon/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/assets/favicon//favicon-16x16.png',
                },
                { rel: 'manifest', type: 'image/png', href: '/site.webmanifest' },
                {
                    rel: 'mask-icon',
                    type: 'image/png',
                    href: '/assets/favicon/safari-pinned-tab.svg',
                    color: '#c8342f',
                },
            ],
            meta: [
                { name: 'msapplication-TileColor', content: '#da532c' },
                { name: 'theme-color', content: '#ffffff' },
            ],
        },
        // pageTransition: { name: 'page', mode: 'out-in' },
        // layoutTransition: { name: 'layout', mode: 'out-in' },
    },
    typescript: {
        strict: true,
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        'nuxt-icon',
        '@nuxt/image-edge',
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore', 'acceptHMRUpdate'],
            },
        ],
    ],
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
        // server: {
        //     proxy: {
        //         '/api': {
        //             target: 'http://api.aroyan7k.beget.tech/',
        //             changeOrigin: true,
        //             rewrite: (path) => path.replace(/^\/api/, ''),
        //         },
        //     },
        // },
    },
    // nitro: {
    //     devProxy: {
    //         '/api': {
    //             target: 'http://api.aroyan7k.beget.tech/',
    //             changeOrigin: true,
    //         },
    //     },
    // },
})
