<template>
    <div class="product-specifications">
        <template v-if="product.details">
            <div
                v-for="detailType in product.details"
                :key="`detail-type-${detailType.name}`"
                class="product-specifications__item product-specifications-item"
            >
                <div class="product-specifications-item__title">{{ detailType.name }}</div>
                <div class="product-specifications-item__list product-specifications-item-list">
                    <div class="product-specifications-item-list__column">
                        <span
                            v-for="detailItem in detailType.details"
                            :key="`detail-type-item-name-${detailItem.name}`"
                        >
                            {{ detailItem.name }}
                        </span>
                    </div>
                    <div class="product-specifications-item-list__column">
                        <span
                            v-for="detailItem in detailType.details"
                            :key="`detail-type-item-value-${detailItem.name}`"
                        >
                            {{ detailItem.value }}
                        </span>
                    </div>
                </div>
            </div>
        </template>
        <button type="button" class="product-specifications__question" @click="showNeedHelp">
            💬    Задать вопрос менеджеру
        </button>
    </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { Product } from '~/api/product/interfaces/Product'
import useModals from '~/composition/useModals'
const { showNeedHelp } = useModals()
defineProps({
    product: {
        type: Object as PropType<Product>,
        required: true,
    },
})
</script>

<style lang="sass" scoped>
.product-specifications
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-gap: 55px 80px

    &__question
        color: $color_primary
        font-size: 18px
        font-weight: 500
        grid-column: -1/1
        display: flex
        align-items: center

.product-specifications-item
    display: grid
    grid-gap: 24px
    justify-items: flex-start

    &__title
        font-size: 18px
        font-weight: 500

.product-specifications-item-list
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 16px 40px

    &__column
        display: grid
        grid-gap: 16px
</style>
