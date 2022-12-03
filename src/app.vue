<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <NeedHelpButton />
    <ModalsContainer />
</template>

<script setup lang="ts">
import { onMounted, useNuxtApp } from '#imports'
import useModals from '~/composition/useModals'
const nuxtApp = useNuxtApp()
const { showReview } = useModals()
// TODO: возможно есть решение по красивее
nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0)
})
onMounted(() => {
    showReview('Кровать')
})
</script>

<style lang="sass" scoped></style>
