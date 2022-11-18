<template>
    <main class="promo-page">
        <section class="promo">
            <Breadcrumbs class="promo__breadcrumbs" />
            <Wrapper class="promo__wrapper">
                <h2 class="promo__title">Акции</h2>
                <div class="promo__cards promo-cards">
                    <div
                        v-for="(item, index) in 6"
                        class="promo-cards__item promo-cards-item"
                        :class="{
                            'promo-cards-item--big': item === 1 || isLastCardBig(index, 6),
                            'promo-cards-item--black': item === 1,
                        }"
                    >
                        <div class="promo-cards-item__bg promo-cards-item-bg">
                            <nuxt-img
                                class="promo-cards-item-bg__image"
                                format="webp"
                                :src="`assets/images/dev/promo/promo-card${item}.png`"
                            />
                        </div>
                        <div v-if="item < 3" class="promo-cards-item__sticker">- 50%</div>
                        <div class="promo-cards-item__content promo-cards-item-content">
                            <div class="promo-cards-item-content__title">Прояви себя!</div>
                            <div class="promo-cards-item-content__description">
                                Добавь стиль жизни в интерьер
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>

        <CategorySales />

        <ProductsSlider>
            <template #title>Топ 10</template>
        </ProductsSlider>
        <NeedHelp />
    </main>
</template>

<script setup lang="ts">
import Wrapper from '~/components/Wrapper.vue'
import { computed, definePageMeta, useWindowSize } from '#imports'
definePageMeta({
    title: 'Акции',
})

const { width } = useWindowSize()
const isMobile = computed(() => (width.value ? width.value < 768 : false))
const isLastCardBig = (index: number, cardsLength: number) =>
    !(cardsLength % 2) && index === cardsLength - 1 && isMobile.value
</script>

<style lang="sass" scoped>
.promo-page
    overflow: hidden
    width: 100%
    //max-width: 1440px
    margin: 0 auto
    display: grid
    grid-gap: 100px
    +until-tablet
        grid-gap: 75px
    +while-mob
        grid-gap: 55px
    & > *
        width: 100vw


.promo
    &__wrapper
        display: grid
        grid-gap: 40px
    &__title
        font-weight: 700
        font-size: 26px
        line-height: 30px
        +until-tablet
            font-size: 24px
            line-height: 24px
        +while-mob
            font-size: 20px

.promo-cards
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-gap: 30px
    +until-tablet
        grid-gap: 20px
    +media-until(767px)
        grid-template-columns: 1fr 1fr
    +while-mob
        grid-gap: 15px

.promo-cards-item
    position: relative
    &--big
        grid-column: span 2
        grid-row: span 2
        & .promo-cards-item-content
            padding: 40px
            +until-tablet
                padding: 30px
            +while-mob
                padding: 16px
            &__title
                font-weight: 700
                font-size: 40px
                +until-tablet
                    font-size: 28px
                +while-mob
                    font-size: 20px
            &__description
                font-weight: 700
                font-size: 20px
                +until-tablet
                    font-size: 18px
                +while-mob
                    font-weight: 400
                    font-size: 16px

        & .promo-cards-item__sticker
            width: 137px
            height: 137px
            font-weight: 700
            font-size: 40px
            top: 30px
            right: 30px
            +until-tablet
                top: 16px
                right: 16px
                font-size: 24px
                width: 80px
                height: 80px
            +while-mob
                top: 8px
                right: 8px
                font-size: 14px
                width: 40px
                height: 40px

    &--black
        & .promo-cards-item-content
            color: $color_onsurface_primary
    &__sticker
        z-index: 3
        border-radius: 50%
        position: absolute
        background-color: $color_onsurface_quaternary
        display: flex
        align-items: center
        justify-content: center
        color: $color_surface_positive
        transform: rotate(13.6deg)
        line-height: 1
        top: 16px
        right: 16px
        font-size: 24px
        width: 80px
        height: 80px
        +until-tablet
            font-size: 20px
            width: 60px
            height: 60px
        +while-mob
            top: 8px
            right: 8px
            font-size: 14px
            width: 40px
            height: 40px

.promo-cards-item-content
    position: absolute
    bottom: 0
    left: 0
    display: grid
    grid-gap: 16px
    padding: 24px
    color: $color_surface_primary
    +until-tablet
        padding: 18px
        grid-gap: 10px
    +while-mob
        padding: 8px
        grid-gap: 5px

    &__title
        font-weight: 700
        font-size: 20px
        line-height: 1.25
        +until-tablet
            font-size: 18px
        +while-mob
            font-size: 16px
    &__description
        font-weight: 700
        font-size: 16px
        line-height: 1.2
        +until-tablet
            font-size: 14px
        +while-mob
            font-weight: 400
            font-size: 12px

.promo-cards-item-bg
    position: relative
    width: 100%
    padding-top: 100%
    &__image
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        object-fit: cover
</style>
