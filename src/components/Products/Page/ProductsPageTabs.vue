<template>
    <div class="product-tabs">
        <UIComponentsTabs v-model="activeTabComponent" :tabs="productTabs" class="product-tabs__tabs" />
        <div class="product-tabs__content">
            <keep-alive>
                <component :is="componentsMap[activeTabComponent]" :product="product" />
            </keep-alive>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { ref } from '#imports'
import {
    LazyProductsPageTabsSpecifications,
    LazyProductsPageTabsAssembly,
    LazyProductsPageTabsDelivery,
    LazyProductsPageTabsGuarantee,
    LazyProductsPageTabsReviews,
} from '#components'
import { productTabs } from '~/constants/productTabs'
import { Product } from '~/api/product/interfaces/Product'

defineProps({
    product: {
        type: Object as PropType<Product>,
        required: true,
    },
})

const componentsMap = {
    specifications: LazyProductsPageTabsSpecifications,
    assembly: LazyProductsPageTabsAssembly,
    delivery: LazyProductsPageTabsDelivery,
    guarantee: LazyProductsPageTabsGuarantee,
    reviews: LazyProductsPageTabsReviews,
}

const activeTabComponent = ref('specifications')
</script>

<style lang="sass" scoped>
.product-tabs
    &__tabs
        margin-bottom: 40px
    &__content
        padding: 48px
        background-color: $color_surface_overlay
</style>
