<template>
    <section class="products-slider">
        <Wrapper class="products-slider__wrapper">
            <h2 class="products-slider__title">
                <slot name="title" />
            </h2>
            <Swiper class="products-slider__swiper products-slider-swiper" v-bind="swiperOptions">
                <SwiperSlide
                    v-for="(product, index) in 0"
                    :key="`products-slider-swiper-slide-${index}`"
                    class="products-slider-swiper__slide"
                >
                    <!--                    <ProductsCard />-->
                </SwiperSlide>
            </Swiper>
        </Wrapper>
    </section>
</template>

<script setup lang="ts">
import { FreeMode, Mousewheel, Navigation, SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Wrapper from '~/components/Wrapper.vue'
import 'swiper/css'

const swiperOptions: SwiperOptions = {
    modules: [Navigation, Mousewheel, FreeMode],
    slidesPerView: 'auto',
    navigation: {
        enabled: true,
    },
    updateOnWindowResize: true,
    freeMode: true,
    mousewheel: {
        forceToAxis: true,
    },
}
</script>

<style lang="sass" scoped>
.products-slider
    &__wrapper
        display: grid
        grid-template-columns: 100%
        grid-gap: 40px
        +until-tablet
            grid-gap: 30px
        +while-mob
            grid-gap: 24px

    &__title
        font-weight: 600
        font-size: 26px
        line-height: 30px
        +until-tablet
            font-size: 24px
            line-height: 24px
        +while-mob
            font-size: 20px

.products-slider-swiper
    width: 100%
    overflow: visible

    & :deep(.swiper-button-prev), :deep(.swiper-button-next)
        cursor: pointer
        z-index: 3
        width: 60px
        height: 60px
        position: absolute
        top: 50%
        left: -30px
        transform: translateY(-100%)
        background: #FFFFFF
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.05)
        border-radius: 50%
        transition: opacity .3s
        +media-until(1300px)
            display: none

        &.swiper-button-disabled
            opacity: 0
            visibility: hidden

        &::before
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            content: ''
            width: 12px
            height: 22px
            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjAwMDEgMTAuOTk5OUMxMi4wMDAxIDExLjI1NTcgMTEuOTAyMyAxMS41MTE3IDExLjcwNzEgMTEuNzA2OUwxLjcwNzA2IDIxLjcwNjlDMS4zMTYzMSAyMi4wOTc3IDAuNjgzNTYzIDIyLjA5NzcgMC4yOTMwNjIgMjEuNzA2OUMtMC4wOTc0Mzc1IDIxLjMxNjIgLTAuMDk3Njg3NSAyMC42ODM0IDAuMjkzMDYyIDIwLjI5MjlMOS41ODYwNiAxMC45OTk5TDAuMjkzMDYyIDEuNzA2OTRDLTAuMDk3Njg4NCAxLjMxNjE5IC0wLjA5NzY4ODQgMC42ODM0MzUgMC4yOTMwNjIgMC4yOTI5MzZDMC42ODM4MTIgLTAuMDk3NTYyOCAxLjMxNjU2IC0wLjA5NzgxNDYgMS43MDcwNiAwLjI5MjkzNkwxMS43MDcxIDEwLjI5MjlDMTEuOTAyMyAxMC40ODgyIDEyLjAwMDEgMTAuNzQ0MiAxMi4wMDAxIDEwLjk5OTlaIiBmaWxsPSIjQjNCM0IzIi8+Cjwvc3ZnPgo=)
            background-size: contain

    & :deep(.swiper-button-next)
        left: unset
        right: -30px

    & :deep(.swiper-button-prev)
        transform: rotate(180deg) translateY(100%)

    &__slide
        margin-right: 40px
        max-width: 380px
        +until-desktop
            max-width: 330px
        +until-tablet
            margin-right: 24px
            max-width: 280px
        +while-mob
            margin-right: 16px
            max-width: 212px
</style>
