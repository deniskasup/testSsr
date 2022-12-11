<template>
    <div class="">{{ $route.params.category }}</div>
    <pre>
        {{ response }}
    </pre>
</template>

<script setup lang="ts">
import { computed, definePageMeta, unref, useHead, useRoute } from '#imports'
import useCategoriesRequests from '~/composition/requests/useCategoriesRequests'
const { getCategoryData } = useCategoriesRequests()
const route = useRoute()

// НИХУЯ НЕ РАБОТАЕТ БЛЯТЬ
const categoryName = computed(() =>
    Array.isArray(route.params.category) ? route.params.category[0] : route.params.category
)
const { data: response } = await getCategoryData(categoryName.value)

definePageMeta({
    title: unref(response)?.data.pageTitle,
    // middleware: ['categories'],
})

useHead({
    title: unref(response)?.data.pageTitle,
    meta: [
        {
            name: 'description',
            content: unref(response)?.data.description,
        },
    ],
})
</script>

<style lang="sass" scoped></style>
