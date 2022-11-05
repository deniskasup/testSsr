<template>
    <main class="main-page">
        <MainSlider />
        <ProductsSlider>
            <template #title>Популярные товары</template>
        </ProductsSlider>
    </main>
</template>

<script setup lang="ts">
import MainSlider from '~/components/MainSlider.vue'
import ProductsSlider from '~/components/ProductsSlider.vue'
</script>
<style lang="sass" scoped>
.main-page
    overflow: hidden
    width: 100%
    //max-width: 1440px
    margin: 0 auto
    display: grid
    grid-gap: 100px
    & > *
        width: 100vw
</style>
