<template>
    <main class="default-page main-page">
        <MainSlider />
        <ProductsSlider>
            <template #title>Популярные товары</template>
        </ProductsSlider>

        <Showcase />

        <PromoSlider />

        <Advantages />

        <OurGoal />

        <MainReviews />

        <NeedHelp />
    </main>
</template>

<script setup lang="ts">
import { definePageMeta, useHead } from '#imports'
definePageMeta({
    hideBreadcrumbs: true,
    showSubMenu: true,
})

useHead({
    title: 'ВМ Мебель',
    meta: [
        {
            name: 'description',
            content: 'ВМ Мебель',
        },
    ],
})
</script>
