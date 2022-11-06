<template>
    <section class="showcase">
        <Wrapper class="showcase__wrapper">
            <div class="showcase__column showcase-column">
                <NuxtLink to="/" class="showcase-column__block showcase-column-block">
                    <div class="showcase-column-block__title">Кровати</div>
                    <nuxt-img
                        loading="lazy"
                        class="showcase-column-block__img"
                        format="webp"
                        :src="`assets/images/showcase/showcase-beds${mobileImagePath}.png`"
                    />
                </NuxtLink>
                <NuxtLink to="/" class="showcase-column__block showcase-column-block">
                    <div class="showcase-column-block__title">Стенки</div>
                    <nuxt-img
                        loading="lazy"
                        class="showcase-column-block__img"
                        format="webp"
                        :src="`assets/images/showcase/showcase-walls${mobileImagePath}.png`"
                    />
                </NuxtLink>
            </div>
            <div class="showcase__column showcase-column">
                <NuxtLink to="/" class="showcase-column__block showcase-column-block">
                    <div class="showcase-column-block__title">Кухни</div>
                    <nuxt-img
                        loading="lazy"
                        class="showcase-column-block__img"
                        format="webp"
                        :src="`assets/images/showcase/showcase-kitchens${mobileImagePath}.png`"
                    />
                </NuxtLink>
                <div class="showcase-column__text">
                    Обустраивайте свой дом. <br />
                    Создавайте обстановку, которая <br />
                    делает будни ярче!
                </div>
                <NuxtLink to="/" class="showcase-column__block showcase-column-block">
                    <div class="showcase-column-block__title">Спальни</div>
                    <nuxt-img
                        loading="lazy"
                        class="showcase-column-block__img"
                        format="webp"
                        :src="`assets/images/showcase/showcase-bedrooms${mobileImagePath}.png`"
                    />
                </NuxtLink>
            </div>
            <div class="showcase__column showcase-column">
                <NuxtLink to="/" class="showcase-column__block showcase-column-block">
                    <div class="showcase-column-block__title">Шкафы</div>
                    <nuxt-img
                        loading="lazy"
                        class="showcase-column-block__img"
                        format="webp"
                        :src="`assets/images/showcase/showcase-cabinets${mobileImagePath}.png`"
                    />
                </NuxtLink>
                <NuxtLink to="/" class="showcase-column__block showcase-column-block">
                    <div class="showcase-column-block__title">Прихожие</div>
                    <nuxt-img
                        loading="lazy"
                        class="showcase-column-block__img"
                        format="webp"
                        :src="`assets/images/showcase/showcase-hallways${mobileImagePath}.png`"
                    />
                </NuxtLink>
            </div>
        </Wrapper>
    </section>
</template>

<script setup lang="ts">
import Wrapper from '~/components/Wrapper.vue'
import { computed, useWindowSize } from '#imports'
const { width } = useWindowSize()
const mobileImagePath = computed(() => (width.value > 900 ? '' : '-mobile'))
</script>

<style lang="sass" scoped>
.showcase
    &__wrapper
        display: grid
        grid-gap: 30px
        grid-template-columns: 1fr 1fr 1fr
        +media-until(900px)
            grid-template-columns: 100%
    &__column
        &:nth-of-type(1)
            +media-until(900px)
                order: 2
        &:nth-of-type(2)
            +media-until(900px)
                order: 1
        &:nth-of-type(3)
            +media-until(900px)
                order: 3

.showcase-column
    display: grid
    grid-gap: 30px
    align-content: space-between
    +media-until(900px)
        grid-template-columns: 1fr 1fr
        grid-gap: 24px
    +while-mob
        grid-gap: 16px
    &__text
        text-align: center
        font-weight: 600
        font-size: 20px
        line-height: 24px
        +until-tablet
            font-size: 16px
            line-height: 1.4
        +media-until(900px)
            grid-column: -1/1
            order: 1
            font-size: 18px
.showcase-column-block
    position: relative
    +media-until(900px)
        order: 2
    &__img
        width: 100%
        transition: transform .3s
        &:hover
            transform: scale(1.01)
    &__title
        z-index: 2
        position: absolute
        top: 20px
        left: 20px
        font-weight: 600
        font-size: 20px
        line-height: 24px
        +until-tablet
            line-height: 1.4
            font-size: 18px
        +while-mob
            top: 8px
            left: 8px
            font-size: 14px
</style>
