<template>
    <div class="product-card">
        <button type="button" class="product-card__favorite product-card-favorite">
            <Icon class="product-card-favorite__icon" name="ri:heart-line" />
        </button>
        <a href="#" class="product-card__image product-card-image">
            <nuxt-img format="webp" src="assets/images/dev/products/product1.png" />
        </a>
        <div class="product-card__info product-card-info">
            <div class="product-card-info__type">Кровать</div>
            <div class="product-card-info__name">Классика</div>
            <div class="product-card-info__price product-card-info-price">
                <div class="product-card-info-price__current">4 499 ₽</div>
                <div class="product-card-info-price__old">5 999 ₽</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.product-card
    user-select: none
    width: 380px
    display: grid
    grid-gap: 12px
    &__favorite
        z-index: 2
        position: absolute
        top: 20px
        right: 20px
    &__image
        position: relative
        width: 380px
        padding-top: 100%
        & > img
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            width: 100%
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
        font-weight: 700
        font-size: 18px
        line-height: 22px
        margin-bottom: 12px

.product-card-info-price
    display: flex
    align-items: center
    &__current
        margin-right: 8px
        font-weight: 700
        font-size: 20px
        line-height: 24px
    &__old
        color: $color_onsurface_tetriary
        font-weight: 700
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
