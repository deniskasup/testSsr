<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <NeedHelpButton />
    <ModalsContainer />
</template>

<script setup lang="ts">
import { useNuxtApp } from '#imports'
import useCategoriesRequests from '~/composition/requests/useCategoriesRequests'
const nuxtApp = useNuxtApp()
const { getCategoriesTree } = useCategoriesRequests()

await getCategoriesTree()
// TODO: возможно есть решение по красивее
nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0)
})
</script>
