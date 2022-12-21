<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <NeedHelpButton />
    <ModalsContainer />
</template>

<script setup lang="ts">
import { onMounted, useNuxtApp } from '#imports'
import useCategoriesRequests from '~/composition/requests/useCategoriesRequests'
import { useUserCity } from '~/composition/useUserCity'
const nuxtApp = useNuxtApp()
const { getCategoriesTree } = useCategoriesRequests()
const { checkCity, loadCitiesList } = useUserCity()

await getCategoriesTree()
await loadCitiesList()

// TODO: возможно есть решение по красивее
nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0)
})
onMounted(async () => {
    await checkCity()
})
</script>
