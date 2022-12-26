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
const { checkCity, getCitiesList } = useUserCity()

await getCitiesList()
await checkCity()
await getCategoriesTree()

// TODO: возможно есть решение по красивее
nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0)
})
</script>
