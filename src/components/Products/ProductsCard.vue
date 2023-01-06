<template>
    <div class="product-card">
        <button type="button" class="product-card__favorite product-card-favorite" @click="showRegistration">
            <Icon class="product-card-favorite__icon" name="ri:heart-line" />
        </button>
        <nuxt-link :to="product.url" class="product-card__image product-card-image">
            <nuxt-img format="webp" :src="`http://api.aroyan7k.beget.tech${product.image}`" />
        </nuxt-link>
        <div class="product-card__info product-card-info">
            <div class="product-card-info__type">TEST</div>
            <div class="product-card-info__name">{{ product.name }}</div>
            <div class="product-card-info__price product-card-info-price">
                <div class="product-card-info-price__current">{{ product.price }} ₽</div>
                <div v-if="product.old_price" class="product-card-info-price__old">{{ product.old_price }} ₽</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { CategoryProduct } from '~/api/categories/interfaces/CategoryProduct'
import useModals from '~/composition/useModals'
const { showRegistration } = useModals()

const props = defineProps({
    product: {
        type: Object as PropType<CategoryProduct>,
        required: true,
    },
})
</script>

<style lang="sass" scoped>
.product-card
    user-select: none
    display: grid
    grid-gap: 12px
    width: 100%
    max-width: 380px
    position: relative

    &__favorite
        z-index: 2
        position: absolute
        top: 20px
        right: 20px

    &__image
        position: relative
        width: 100%
        padding-top: 100%

        & > img
            object-fit: contain
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            width: 100%
            max-height: 100%

.product-card-image
    background-color: $color_onsurface_quaternary

.product-card-info
    display: flex
    flex-direction: column
    align-items: flex-start

    &__type
        text-transform: uppercase
        font-size: 12px
        color: $color_onsurface_tetriary
        margin-bottom: 4px

    &__name
        font-weight: 600
        font-size: 18px
        line-height: 22px
        margin-bottom: 12px

.product-card-info-price
    display: flex
    align-items: center

    &__current
        margin-right: 8px
        font-weight: 600
        font-size: 20px
        line-height: 24px

    &__old
        color: $color_onsurface_tetriary
        font-weight: 600
        font-size: 14px
        line-height: 20px
        text-decoration-line: line-through

.product-card-favorite
    transition: opacity .3s

    &:not(.product-card-favorite--active):hover
        opacity: .5

    &__icon
        color: $color_onsurface_tetriary
        width: 24px
        height: 24px
</style>
