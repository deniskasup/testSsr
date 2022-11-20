<template>
    <main class="default-page personal-page">
        <section class="personal">
            <Breadcrumbs class="personal__breadcrumbs" />
            <Wrapper class="personal__wrapper">
                <h2 class="personal__title">Личный кабинет</h2>
                <div class="personal__orders personal-orders">
                    <div class="personal-orders__item personal-orders-item">
                        <div class="personal-orders-item__info personal-orders-item-info">
                            <div class="personal-orders-item-info__line">
                                <div class="personal-orders-item__id">№ 1267470</div>
                                <div
                                    class="personal-orders-item__status personal-orders-item__status--green"
                                >
                                    Получен
                                </div>
                                <div class="personal-orders-item__price">6 500 ₽</div>
                            </div>
                            <div class="personal-orders-item-info__line">
                                <div class="personal-orders-item__date">5 Окт 2022</div>
                                <div class="personal-orders-item__quantity">3 товара</div>
                            </div>
                        </div>
                    </div>
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
        <NeedHelp />
    </main>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'
definePageMeta({
    title: 'Личный кабинет',
})
</script>

<style lang="sass" scoped>
.personal
    &__wrapper
        display: grid
        grid-template-columns: 1fr 1fr 1fr
        grid-gap: 40px 48px
        +until-tablet
            grid-gap: 30px
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
    display: grid
    grid-gap: 16px

.personal-orders-item
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05)
    border-radius: 8px
    display: grid
    grid-gap: 32px
    padding: 24px
    &__id
        font-weight: 700
        line-height: 1.2
        font-size: 20px
        margin-right: 24px
    &__status
        text-transform: uppercase
        color: $color_surface_primary
        font-size: 10px
        border-radius: 72px
        padding: 2px 8px
        &--green
            background: #91C38C
    &__date, &__quantity
        font-size: 10px
        color: $color_onsurface_secondary
    &__quantity
        margin-left: auto

    &__price
        margin-left: auto
        font-weight: 700
        line-height: 1.2
        font-size: 18px

.personal-orders-item-info
    display: grid
    grid-gap: 4px
    &__line
        display: flex
        align-items: center
</style>
