<template>
    <div class="with-breadcrumbs-layout flex min-h-screen flex-col">
        <TheHeader />
        <div class="grow">
            <Breadcrumbs />
            <slot />
        </div>
        <TheFooter />
        <ScrollTop />
    </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import { useNuxtApp } from '#imports'
import ScrollTop from '~/components/ScrollTop.vue'

const nuxtApp = useNuxtApp()

// TODO: возможно есть решение по красивее
nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0)
})
</script>

<style lang="sass" scoped></style>
