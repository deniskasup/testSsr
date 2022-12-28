<template>
    <main class="default-page catalog-page">
        <section class="catalog">
            <!--  сделать обработку ожидания запроса, в обертке над фетчем -->
            <ProductsGrid v-if="categoryData" :products="categoryData.products" :title="categoryData.pageTitle" />
            <ProductsGridPlaceholder v-else />
        </section>
        <NeedHelp />
    </main>
</template>

<script setup lang="ts">
import { computed, ref, unref, useHead, useRoute } from '#imports'
import useCategoriesRequests from '~/composition/requests/useCategoriesRequests'
import { Category } from '~/api/categories/interfaces/Category'
import ProductsGridPlaceholder from '~/components/Placeholders/ProductsGridPlaceholder.vue'
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
