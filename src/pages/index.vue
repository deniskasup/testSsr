<template>
    <main class="default-page main-page">
        <MainSlider />
        <ProductsSlider>
            <template #title>Популярные товары</template>
        </ProductsSlider>

        <ClientOnly>
            <Showcase />
        </ClientOnly>

        <PromoSlider />

        <Advantages />

        <OurGoal />

        <MainReviews />
        <NeedHelp />
    </main>
</template>

<script setup lang="ts">
import { useHead } from '#imports'

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
