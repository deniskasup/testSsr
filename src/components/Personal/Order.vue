<template>
    <div class="personal-orders-item">
        <div class="personal-orders-item-info">
            <div class="personal-orders-item-info__column">
                <div class="personal-orders-item__id">№ 1267470</div>
                <div class="personal-orders-item__date">5 Окт 2022</div>
            </div>
            <div class="personal-orders-item-info__column">
                <div class="personal-orders-item__status personal-orders-item__status--green">Получен</div>
            </div>
            <div class="personal-orders-item-info__column">
                <div class="personal-orders-item__price">6 500 ₽</div>
                <div class="personal-orders-item__quantity">3 товара</div>
            </div>
        </div>
        <div class="personal-orders-item__products personal-orders-item-products">
            <div v-if="isShowDetails" class="personal-orders-item-products__list personal-orders-item-products-list">
                <PersonalProduct v-for="item in 3" class="personal-orders-item-products-list__item" />
            </div>
            <div v-else class="personal-orders-item-products__slider personal-orders-item-products-slider">
                <Swiper class="personal-orders-item-products-slider__swiper" v-bind="swiperOptions">
                    <SwiperSlide
                        v-for="item in 10"
                        :key="`personal-orders-item-products-slider-slide-${item}`"
                        class="personal-orders-item-products-slider__slide personal-orders-item-products-slider-slide"
                    >
                        <div class="personal-orders-item-products-slider-slide__image">
                            <nuxt-img format="webp" src="assets/images/dev/products/product1.png" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <button
                type="button"
                class="personal-orders-item-products__show-more"
                :class="{ 'personal-orders-item-products__show-more--opened': isShowDetails }"
                @click="toggleDetails"
            >
                {{ isShowDetails ? 'Скрыть подробности' : 'Показать подробности' }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Mousewheel, SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from '#imports'
import 'swiper/css'
import PersonalProduct from '~/components/Personal/Product.vue'
const swiperOptions: SwiperOptions = {
    observeParents: true,
    observer: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    modules: [Mousewheel],
    mousewheel: {
        forceToAxis: true,
    },
}

const isShowDetails = ref(false)

const toggleDetails = () => (isShowDetails.value = !isShowDetails.value)
</script>

<style lang="sass" scoped>
.personal-orders-item
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05)
    border-radius: 8px
    display: flex
    flex-direction: column
    padding: 24px
    +until-tablet
        padding: 16px
    +while-mob
        padding: 16px 8px
    &:not(:last-of-type)
        margin-bottom: 16px
    &__id
        font-weight: 600
        line-height: 1.2
        font-size: 20px
        margin-bottom: 4px
        +while-mob
            font-size: 18px
            margin-bottom: 0
    &__status
        margin-top: 2px
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
    &__price
        margin-left: auto
        font-weight: 600
        line-height: 1.2
        font-size: 18px
        margin-bottom: 4px
        +while-mob
            font-size: 16px
            margin-bottom: 0

.personal-orders-item-info
    width: 100%
    display: grid
    grid-gap: 24px
    margin-bottom: 32px
    grid-template-columns: minmax(110px, max-content) 1fr minmax(min-content, max-content)
    +while-mob
        grid-gap: 12px
        margin-bottom: 26px
    &__column
        display: flex
        flex-direction: column
        justify-content: space-between
        align-items: flex-start


.personal-orders-item-products
    width: 100%
    display: flex
    align-items: flex-start
    justify-content: space-between
    +media-until(1023px)
        display: grid
        grid-template-columns: 100%
        align-items: flex-start
        justify-items: flex-start
        justify-content: unset
        grid-gap: 10px
    &__list
        width: 100%
        max-width: 376px
        +media-until(768px)
            max-width: unset
    &__show-more
        display: flex
        align-items: center
        margin-left: 20px
        margin-top: 30px
        flex-shrink: 0
        position: relative
        line-height: 1.4
        font-weight: 600
        color: $color_primary
        padding-right: 20px
        outline: none
        +no-select
        +media-until(1023px)
            margin-left: unset
        +while-mob
            margin-top: 5px

        &::after
            position: absolute
            right: 0
            top: 7px
            content: ''
            width: 6px
            height: 6px
            border-bottom: 2px solid
            border-left: 2px solid
            transform: rotate(-45deg)
        &--opened
            &::after
                top: 9px
                transform: rotate(135deg)


.personal-orders-item-products-slider
    max-width: 500px
    +media-until(1200px)
        max-width: 330px

    +media-until(1023px)
        max-width: 100%

.personal-orders-item-products-slider-slide
    width: 80px
    +media-until(1200px)
        width: 60px
    +while-mob
        width: 40px
    &__image
        user-select: none
        position: relative
        background-color: $color_onsurface_quaternary
        width: 100%
        padding-top: 100%
        & > img
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            width: 100%
</style>
