<template>
    <section class="main-slider">
        <Swiper
            class="main-slider__swiper"
            :modules="[Pagination, Autoplay]"
            v-bind="swiperOptions"
        >
            <SwiperSlide
                v-for="(slide, slideIndex) in 3"
                :key="`main-slider-slide-${slideIndex}`"
                class="main-slider__slide main-slider-slide"
            >
                <!--TODO: настроить картинки-->
                <nuxt-img
                    class="main-slider-slide__bg"
                    format="webp"
                    src="assets/images/dev/main-slider-1.jpg"
                />
                <div class="main-slider-slide__container">
                    <Wrapper class="main-slider-slide__wrapper">
                        <div class="main-slider-slide__content main-slider-slide-content">
                            <div class="main-slider-slide-content__title">
                                Прояви себя! {{ slide }}
                            </div>
                            <div class="main-slider-slide-content__subtitle">
                                Добавь стиль жизни в интерьер
                            </div>
                        </div>
                    </Wrapper>
                </div>
            </SwiperSlide>
            <div class="main-slider-pagination-container">
                <Wrapper class="main-slider-pagination-container__wrapper">
                    <div class="main-slider-pagination"></div>
                </Wrapper>
            </div>
        </Swiper>
    </section>
</template>

<script setup lang="ts">
import { Autoplay, Pagination, SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import Wrapper from '~/components/Wrapper.vue'

const swiperOptions: SwiperOptions = {
    pagination: {
        el: '.main-slider-pagination',
        clickable: true,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        renderBullet(index: number, className: string) {
            return `
            <span class="${className}">
                <svg class="timer" viewBox="0 0 60 60">
                    <circle r="28" cx="30" cy="30"></circle>
                </svg>
            </span>
        `
        },
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
}
</script>

<style lang="sass" scoped>
.main-slider
    &__swiper
        width: 100%

.main-slider-slide
    position: relative

    &__bg
        aspect-ratio: 1440/600
        width: 100vw
        object-fit: cover
        +while-mob
            aspect-ratio: 320/200

    &__container
        position: absolute
        z-index: 1
        top: 0
        left: 0
        width: 100%
        height: 100%
        display: flex
        align-items: center

    &__wrapper
        align-items: center
        justify-content: flex-start

.main-slider-slide-content
    display: grid
    grid-gap: 24px
    padding-right: 40px
    +until-tablet
        grid-gap: 16px
    +while-mob
        grid-gap: 8px

    &__title
        font-weight: 600
        font-size: 40px
        line-height: 50px
        +until-tablet
            font-size: 26px
            line-height: 1.5
        +while-mob
            font-size: 20px
            line-height: 1.5

    &__subtitle
        font-weight: 600
        font-size: 26px
        line-height: 30px
        +until-tablet
            font-size: 20px
            line-height: 1.5
        +while-mob
            font-weight: 400
            font-size: 16px
            line-height: 1.5

.main-slider-pagination
    display: grid
    justify-items: center
    +no-select
    &-container
        z-index: 2
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        display: flex
        align-items: center

        &__wrapper
            justify-content: flex-end

    & :deep(.swiper-pagination-bullet)
        position: relative
        display: flex
        align-items: center
        justify-content: center
        width: 40px
        height: 40px
        cursor: pointer
        +while-mob
            width: 24px
            height: 24px

        &::before
            opacity: .5
            content: ''
            width: 8px
            height: 8px
            border-radius: 50%
            background-color: $color_surface_primary
            +while-mob
                width: 4px
                height: 4px

        & .timer
            display: none

    &:deep(.swiper-pagination-bullet-active)
        width: 60px
        height: 60px
        +while-mob
            width: 32px
            height: 32px

        &::before
            background-color: transparent
            width: 58px
            height: 58px
            border: 1px solid $color_surface_primary
            +while-mob
                width: 30px
                height: 30px

        &::after
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            content: ''
            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxOCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNSAxTDE2LjUgOE0xNi41IDhMOS41IDE1TTE2LjUgOEgxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=)
            background-size: contain
            width: 16px
            height: 15px
            +while-mob
                width: 12px
                height: 12px

        & .timer
            display: block
            position: absolute
            top: 0
            right: 0
            width: 60px
            height: 60px
            transform: rotateZ(-90deg)
            +while-mob
                width: 32px
                height: 32px

            & circle
                stroke-dasharray: 189px
                stroke-dashoffset: 0
                stroke-linecap: round
                stroke-width: 2px
                stroke: white
                fill: none
                animation: countdown 5s linear forwards

@keyframes countdown
    from
        stroke-dashoffset: 189px
    to
        stroke-dashoffset: 0
</style>
