<template>
    <section class="promo-slider">
        <Wrapper class="promo-slider__wrapper">
            <Swiper class="promo-slider__swiper promo-slider-swiper" v-bind="swiperOptions">
                <SwiperSlide
                    v-for="promo in 4"
                    :key="`promo-slider-swiper__slide-${promo}`"
                    class="promo-slider-swiper__slide promo-slider-swiper-slide"
                >
                    <div class="promo-slide">
                        <div class="promo-slide__image promo-slide-image">
                            <nuxt-img
                                loading="lazy"
                                format="webp"
                                :src="`assets/images/dev/promo/promo${promo}.png`"
                            />
                        </div>
                        <div class="promo-slide__sticker">- 50%</div>
                        <div class="promo-slide__content promo-slide-content">
                            <div class="promo-slide-content__title">Прояви себя! {{ promo }}</div>
                            <div class="promo-slide-content__description">
                                Добавь стиль жизни в интерьер
                            </div>
                            <CustomButton :size="ButtonSize.SMALL"> Посмотреть </CustomButton>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Wrapper>
    </section>
</template>

<script setup lang="ts">
import { Mousewheel, Navigation, SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Wrapper from '~/components/Wrapper.vue'
import CustomButton from '~/components/UIComponents/formElements/CustomButton.vue'
import { ButtonSize } from '~/model/enums/formElements/ButtonSize'
const swiperOptions: SwiperOptions = {
    modules: [Navigation, Mousewheel],
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    speed: 800,
    mousewheel: {
        forceToAxis: true,
    },
    spaceBetween: 50,
    initialSlide: 1,
    navigation: {
        enabled: true,
    },
    updateOnWindowResize: true,
    breakpoints: {
        320: {
            centeredSlides: false,
            spaceBetween: 16,
        },
        767: {
            spaceBetween: 24,
        },
        1024: {
            centeredSlides: true,
            spaceBetween: 50,
        },
    },
}
</script>

<style lang="sass" scoped>

.promo-slider-swiper
    width: 100%
    overflow: visible
    & :deep(.swiper-button-prev), :deep(.swiper-button-next)
        cursor: pointer
        z-index: 3
        width: 72px
        height: 72px
        position: absolute
        top: 50%
        left: -30px
        transform: translateY(-50%)
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
            left: 52%
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
        transform: rotate(180deg) translateY(50%)

:deep(.promo-slider-swiper-slide)
    max-width: 1000px
    transition: filter .5s
    +until-tablet
        max-width: 90%
    &:not(.swiper-slide-active)
        filter: brightness(.5)


.promo-slide
    position: relative
    width: 100%
    padding-top: 50%
    &__sticker
        z-index: 3
        width: 137px
        height: 137px
        border-radius: 50%
        position: absolute
        top: 30px
        right: 30px
        background-color: $color_onsurface_quaternary
        display: flex
        align-items: center
        justify-content: center
        color: $color_surface_positive
        transform: rotate(13.6deg)
        font-weight: 700
        font-size: 40px
        line-height: 1
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
    &__content, &__image
        position: absolute
        width: 100%
        height: 100%
        top: 0
        left: 0
    &__content
        z-index: 2

.promo-slide-content
    padding: 50px
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-end
    color: $color_surface_primary
    +until-tablet
        padding: 30px
    +while-mob
        margin-bottom: 4px
        font-size: 20px
        padding: 12px
    &__title
        font-weight: 700
        font-size: 40px
        line-height: 50px
        margin-bottom: 16px
        +until-tablet
            font-size: 32px
            line-height: 1.25
            margin-bottom: 10px
        +while-mob
            margin-bottom: 4px
            font-size: 20px
    &__description
        font-weight: 700
        font-size: 20px
        line-height: 24px
        margin-bottom: 55px
        +until-tablet
            font-size: 18px
            line-height: 1.25
            margin-bottom: 30px
        +while-mob
            font-weight: 400
            font-size: 14px
            margin-bottom: 20px

.promo-slide-image
    & img
        width: 100%
        object-fit: cover
        object-position: center
        aspect-ratio: 2/1
</style>
