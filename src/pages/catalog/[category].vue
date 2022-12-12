<template>
    <div>
        <div>{{ $route.params.category }}</div>
        <pre>
            {{ categoryData }}
        </pre>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, unref, useHead, useRoute } from '#imports'
import useCategoriesRequests from '~/composition/requests/useCategoriesRequests'
import { Category } from '~/api/categories/interfaces/Category'
const { getCategoryData } = useCategoriesRequests()
const route = useRoute()

const categoryName = computed(() =>
    Array.isArray(route.params.category) ? route.params.category[0] : route.params.category
)
const categoryData = ref<Category | null>(null)
categoryData.value = await getCategoryData(categoryName.value)

// definePageMeta({
//     title: unref(categoryData)?.pageTitle,
//     // middleware: ['categories'],
// })

useHead({
    title: unref(categoryData)?.pageTitle,
    meta: [
        {
            name: 'description',
            content: unref(categoryData)?.description,
        },
    ],
})
</script>

<style lang="sass" scoped></style>
