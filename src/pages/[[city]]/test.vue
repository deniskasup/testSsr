<template>
    <main class="default-page product-page">
        <ProductsPage :product="data" />
        <ProductsSlider>
            <template #title>Популярные товары</template>
        </ProductsSlider>
    </main>
</template>

<script setup lang="ts">
import { Product } from '~/api/product/interfaces/Product'
import { useHead } from '#imports'

const data: Product = await $fetch('/api/product')

useHead({
    title: data.title,
    meta: [
        {
            name: 'description',
            content: data.description,
        },
    ],
})
</script>

<style lang="sass" scoped></style>
