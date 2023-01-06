<template>
    <section class="product">
        <Wrapper class="product__wrapper">
            <ProductsPageSlider :tags="product.tags" :images="product.images" class="product__slider" />
            <ProductsPageInfo :product="product" class="product__info" />
            <ProductsPageTabs :product="product" class="product__tabs" />
        </Wrapper>
    </section>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { Product } from '~/api/product/interfaces/Product'

const props = defineProps({
    product: {
        type: Object as PropType<Product>,
        required: true,
    },
})
</script>

<style lang="sass" scoped>
.product
    &__wrapper
        display: grid
        align-items: flex-start
        grid-gap: 100px
        grid-template-columns: repeat(11, 1fr)
    &__slider
        grid-column: span 7
    &__info
        grid-column: span 4
    &__tabs
        grid-column: -1/1
</style>
