<template>
    <section class="personal">
        <Wrapper class="personal__wrapper">
            <h2 class="personal__title">Личный кабинет</h2>
            <div class="personal__orders personal-orders">
                <PersonalOrder class="personal-orders__item" />
            </div>
            <div class="personal__info personal-info">
                <div class="personal-info__account personal-info-account">
                    <div class="personal-info-account__label">Аккаунт</div>
                    <div class="personal-info-account__phone">+7 999 000 99 00</div>
                </div>
                <div class="personal-info__line personal-info-line">
                    <div class="personal-info-line__label">Общая сумма</div>
                    <div class="personal-info-line__value">10 399 ₽</div>
                </div>
                <div class="personal-info__line personal-info-line">
                    <div class="personal-info-line__label">Всего заказов</div>
                    <div class="personal-info-line__value">2</div>
                </div>
            </div>
        </Wrapper>
    </section>
</template>

<script setup lang="ts">
import PersonalOrder from '~/components/Personal/PersonalOrder.vue'
</script>

<style lang="sass" scoped>
.personal
    &__wrapper
        display: grid
        align-items: flex-start
        grid-template-columns: 1fr 1fr 1fr
        grid-gap: 40px 48px
        +until-tablet
            grid-gap: 30px
        +media-until(767px)
            grid-template-columns: 100%
        +while-mob
            grid-gap: 24px
    &__title
        grid-column: -1/1
        font-weight: 700
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

.personal-info
    display: grid
    grid-gap: 10px
    &__account
        margin-bottom: 15px

.personal-info-account
    display: grid
    grid-gap: 4px
    &__label
        font-size: 12px
        color: $color_onsurface_tetriary
    &__phone
        font-weight: 700
        font-size: 26px
        line-height: 1.15
.personal-info-line
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%
    &__label
        font-size: 12px
        color: $color_onsurface_tetriary
    &__value
        font-weight: 700
        font-size: 16px


.personal-orders
    width: 100%
    display: grid
    grid-gap: 16px
    align-items: flex-start
</style>
