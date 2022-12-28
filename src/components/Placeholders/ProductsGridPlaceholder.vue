<template>
    <div class="products-grid-placeholder">
        <Wrapper class="products-grid-placeholder__wrapper">
            <h2 class="products-grid-placeholder__title"></h2>

            <div class="grid">
                <div v-for="item in 6" :key="`products-grid-placeholder-grid-${item}`" class="grid__item grid-item">
                    <div class="grid-item__image"></div>
                    <div class="grid-item__info grid-item-info">
                        <div class="grid-item-info__label"></div>
                        <div class="grid-item-info__title"></div>
                        <div class="grid-item-info__price"></div>
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.products-grid-placeholder
    &__wrapper
        display: grid
        grid-gap: 40px
        +until-tablet
            grid-gap: 30px
        +while-mob
            grid-gap: 24px

    &__title
        font-weight: 600
        height: 30px
        width: 100px
        +placeholder
        +until-tablet
            height: 24px

.grid
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-gap: 30px
    +media-until(767px)
        grid-template-columns: 1fr 1fr
        grid-gap: 20px
    +while-mob
        grid-gap: 16px

.grid-item
    &__image
        padding-top: 100%
        margin-bottom: 15px
        +placeholder

.grid-item-info
    display: grid
    grid-gap: 12px

    &__label
        height: 14px
        width: 70px
        +placeholder

    &__title
        height: 18px
        width: 100px
        +placeholder

    &__price
        height: 20px
        width: 60px
        +placeholder
</style>
