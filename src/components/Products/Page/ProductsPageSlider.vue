<template>
    <div class="product-slider">
        <div class="product-slider__main product-slider-main">
            <Swiper
                :thumbs="{ swiper: thumbsSwiper }"
                class="product-slider-main__swiper product-slider-main-swiper"
                v-bind="mainSwiperOptions"
            >
                <SwiperSlide
                    v-for="(imageSrc, index) in images"
                    :key="`product-slider-main-swiper-slide-${index}`"
                    class="product-slider-main-swiper__slide product-slider-main-swiper-slide"
                >
                    <nuxt-img
                        class="product-slider-main-swiper-slide__image swiper-lazy"
                        lazy
                        format="webp"
                        :src="imageSrc"
                    />
                    <!-- TODO: проверить lazyload                    -->
                    <div class="swiper-lazy-preloader"></div>
                </SwiperSlide>
                <SwiperSlide class="product-slider-main-swiper__slide product-slider-main-swiper-slide">
                    <!--                    360-->
                </SwiperSlide>
            </Swiper>
            <ProductsTags v-if="tags.length" class="product-slider-main__tags" :tags="tags" />
        </div>
        <div class="product-slider__thumbs product-slider-thumbs">
            <Swiper
                class="product-slider-thumbs__swiper product-slider-thumbs-swiper"
                v-bind="thumbsSwiperOptions"
                @swiper="setThumbsSwiper"
            >
                <SwiperSlide
                    v-for="(imageSrc, index) in images"
                    :key="`product-slider-thumbs-swiper-slide-${index}`"
                    class="product-slider-thumbs-swiper__slide product-slider-thumbs-swiper-slide"
                >
                    <nuxt-img
                        class="product-slider-thumbs-swiper-slide__image"
                        width="100"
                        height="100"
                        fit="contain"
                        format="webp"
                        :src="imageSrc"
                    />
                </SwiperSlide>
                <SwiperSlide class="product-slider-thumbs-swiper__slide product-slider-thumbs-swiper-slide">
                    <img
                        class="product-slider-thumbs-swiper-slide__image"
                        src="~/assets/images/icons/360.svg"
                        alt="360"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SwiperOptions, Thumbs, FreeMode, Lazy, Swiper as SwiperClass } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { PropType } from '@vue/runtime-core'
import { ref } from '#imports'
import { Tag } from '~/api/product/interfaces/Product'

defineProps({
    images: {
        type: Array as PropType<string[] | StringConstructor>,
        default: () => [],
    },
    tags: {
        type: Array as PropType<Tag[]>,
        default: () => [],
    },
})

const thumbsSwiper = ref<SwiperClass>()
const setThumbsSwiper = (swiper: SwiperClass) => {
    thumbsSwiper.value = swiper
}

const mainSwiperOptions: SwiperOptions = {
    slidesPerView: 1,
    updateOnWindowResize: true,
    lazy: true,
    preloadImages: false,
    modules: [Thumbs, Lazy],
}

const thumbsSwiperOptions: SwiperOptions = {
    speed: 200,
    updateOnWindowResize: true,
    slidesPerView: 'auto',
    freeMode: true,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
    modules: [FreeMode, Thumbs],
}
</script>

<style lang="sass" scoped>
.product-slider
    width: 100%
    display: flex
    flex-direction: column
    &__main
        margin-bottom: 24px

.product-slider-main
    position: relative
    &__tags
        z-index: 2
        position: absolute
        bottom: 24px
        right: 24px

.product-slider-main-swiper-slide
    width: 100%
    position: relative
    padding-top: 55%
    background-color: $color_onsurface_quaternary
    &__image
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        object-fit: contain



.product-slider-thumbs-swiper-slide
    cursor: pointer
    position: relative
    width: 100px
    height: 100px
    background-color: $color_onsurface_quaternary
    border: 2px solid transparent
    transition: border-color .3s
    margin-right: 12px
    &__image
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        object-fit: contain
    &.swiper-slide-thumb-active
        border-color: $color_primary
</style>
