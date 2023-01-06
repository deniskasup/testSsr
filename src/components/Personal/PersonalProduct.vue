<template>
    <div class="personal-orders-product">
        <div class="personal-orders-product__image personal-orders-product-image">
            <nuxt-img
                src="assets/images/dev/products/product1.png"
                format="webp"
                class="personal-orders-product-image__img"
            />
        </div>
        <div class="personal-orders-product__info personal-orders-product-info">
            <div class="personal-orders-product-info__article">арт. 124-45678</div>
            <div class="personal-orders-product-info__label">КРОВАТЬ</div>
            <div class="personal-orders-product-info__name">Классика</div>
        </div>
        <div class="personal-orders-product__price personal-orders-product-price">
            <div class="personal-orders-product-price__count">x1</div>
            <div class="personal-orders-product-price__value">4 499 ₽</div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.personal-orders-product
    display: grid
    grid-template-columns: 64px 3fr 1fr
    grid-gap: 16px
    padding: 12px 0
    +while-mob
        grid-template-columns: minmax(min-content, 128px) 1fr
    &:not(:last-of-type)
        border-bottom: 1px solid $color_onsurface_quaternary

.personal-orders-product-image
    user-select: none
    position: relative
    background-color: $color_onsurface_quaternary
    width: 100%
    padding-top: 100%
    +while-mob
        grid-row: span 2
    &__img
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        width: 100%

.personal-orders-product-info
    display: flex
    flex-direction: column
    &__label
        margin-top: auto
        font-size: 8px
        text-transform: uppercase
        color: $color_onsurface_tetriary
        +while-mob
            margin-top: 0
            order: 1

    &__name
        font-size: 14px
        font-weight: 600
        +while-mob
            order: 2
            margin-bottom: 8px

    &__article
        font-size: 8px
        color: $color_onsurface_tetriary
        +while-mob
            order: 3
.personal-orders-product-price
    justify-self: flex-end
    align-self: flex-end
    +while-mob
        justify-self: flex-start
    &__count
        font-size: 8px
        color: $color_onsurface_tetriary
    &__price
        font-size: 14px
        font-weight: 600
        +while-mob
            font-size: 12px
</style>
