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

<script setup lang="ts"></script>
