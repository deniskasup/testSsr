import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('resize', {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        mounted(el: any, binding) {
            const onResizeCallback = binding.value
            window.addEventListener('resize', () => {
                const width = document.documentElement.clientWidth
                const height = document.documentElement.clientHeight
                onResizeCallback({ width, height })
            })
        },
    })
})
