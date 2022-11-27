<template>
    <section class="personal-placeholder">
        <Wrapper class="personal-placeholder__wrapper">
            <h2 class="personal-placeholder__title">
                <slot name="title" />
            </h2>
            <div class="personal-placeholder__orders personal-placeholder-orders">
                <div class="personal-placeholder-orders__item"></div>
                <div class="personal-placeholder-orders__item"></div>
            </div>
            <div class="personal-placeholder__info personal-placeholder-info">
                <div class="personal-placeholder-info__account personal-placeholder-info-account">
                    <div class="personal-placeholder-info-account__label"></div>
                    <div class="personal-placeholder-info-account__phone"></div>
                </div>
                <div class="personal-placeholder-info__line personal-placeholder-info-line"></div>
                <div class="personal-placeholder-info__line personal-placeholder-info-line"></div>
            </div>
        </Wrapper>
    </section>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.personal-placeholder
    &__wrapper
        display: grid
        align-items: flex-start
        grid-template-columns: 1fr 1fr 1fr
        grid-gap: 40px 48px
        +until-tablet
            grid-gap: 30px
        +media-until(767px)
            grid-template-columns: 1fr
        +while-mob
            grid-gap: 24px
    &__title
        grid-column: -1/1
        font-weight: 600
        font-size: 26px
        line-height: 30px
        +until-tablet
            font-size: 24px
            line-height: 24px
        +while-mob
            font-size: 20px
    &__orders
        grid-column: span 2
        +media-until(767px)
            grid-column: unset
            order: 2
.personal-placeholder-info
    display: grid
    grid-gap: 10px
    &__account
        margin-bottom: 15px

.personal-placeholder-info-account
    display: grid
    grid-gap: 4px
    &__label
        height: 16px
        width: 60px
        +placeholder
    &__phone
        height: 30px
        width: 180px
        +placeholder
.personal-placeholder-info-line
    width: 100%
    height: 30px
    +placeholder


.personal-placeholder-orders
    display: grid
    grid-gap: 16px
    align-items: flex-start
    &__item
        width: 100%
        height: 150px
        +placeholder
</style>
