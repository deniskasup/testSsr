<template>
    <div class="product-reviews">
        <template v-if="true">
            <div class="product-reviews__head product-reviews-head">
                <div class="product-reviews-head__title">Отзывы</div>
                <div class="product-reviews-head__score product-reviews-head-score">
                    <CustomStars disabled class="product-reviews-head-score__stars" />
                    <div class="product-reviews-head-score__text"><b>4.8</b>/5</div>
                </div>
                <CustomButton class="product-reviews-head__new-review" @click="showReview">Написать отзыв</CustomButton>
            </div>
            <div class="product-reviews__slider product-reviews-slider">
                <Swiper v-bind="swiperOptions" class="product-reviews-slider__swiper product-reviews-slider-swiper">
                    <SwiperSlide
                        v-for="slide in 8"
                        class="product-reviews-slider-swiper__slide product-reviews-slider-swiper-slide"
                    >
                        <div class="product-reviews-slider-swiper-slide__image">
                            <nuxt-img format="webp" src="assets/images/dev/products/product1.jpg" />
                        </div>
                        <div class="product-reviews-slider-swiper-slide__info product-reviews-slider-swiper-slide-info">
                            <div class="product-reviews-slider-swiper-slide-info__name">Дмитрий</div>
                            <CustomStars size="s" disabled class="product-reviews-slider-swiper-slide-info__stars" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <button
                type="button"
                class="product-reviews__list-button"
                :class="{ 'product-reviews__list-button--visible': isReviewListVisible }"
                @click="toogleReviewListVisibility()"
            >
                {{ isReviewListVisible ? 'Показать' : 'Скрыть все' }}
            </button>
            <div class="product-reviews__list product-reviews-list"></div>
            <CustomButton priority="secondary" class="product-reviews__show-more">Показать ещё</CustomButton>
        </template>
    </div>
</template>

<script setup lang="ts">
import { Mousewheel, Navigation, SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import CustomStars from '@/components/UIComponents/formElements/CustomStars'
import CustomButton from '@/components/UIComponents/formElements/CustomButton'
import 'swiper/css'
import useModals from '~/composition/useModals'

import { ref } from '#imports'

const { showReview } = useModals()
const isReviewListVisible = ref(true)
const toogleReviewListVisibility = () => {
    isReviewListVisible.value = !isReviewListVisible.value
}

const swiperOptions: SwiperOptions = {
    modules: [Navigation, Mousewheel],
    mousewheel: {
        forceToAxis: true,
    },
    slidesPerView: 'auto',
    navigation: {
        enabled: true,
    },
    updateOnWindowResize: true,
}
</script>

<style lang="sass" scoped>
.product-reviews
    display: grid
    grid-template-columns: 100%
    grid-gap: 40px
    &__show-more
        justify-self: flex-start
    &__list-button
        position: relative
        justify-self: flex-start
        font-size: 16px
        font-weight: 600
        &::after
            content: ''
            width: 9px
            height: 9px
            border-bottom: 2px solid
            border-right: 2px solid
            position: absolute
            top: 10px
            transform: rotate(-135deg)
            right: -27px
        &--visible
            &::after
                top: 7px
                transform: rotate(45deg)

.product-reviews-head
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 10px
    &__title
        +h3
        grid-column: -1/1
    &__new-review
        justify-self: flex-end
    &__score
        justify-self: flex-start

.product-reviews-head-score
    display: flex
    align-items: center
    &__stars
        margin-right: 12px
    &__text
        font-size: 12px
        & b
            font-size: 16px

.product-reviews-slider-swiper-slide
    max-width: 200px
    margin-right: 24px
    &__image
        position: relative
        padding-top: 100%
        margin-bottom: 12px
        & img
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            object-fit: cover

.product-reviews-slider-swiper-slide-info
    display: flex
    justify-content: space-between
    align-items: center
    &__stars
        width: auto
</style>
