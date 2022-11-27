<template>
    <div class="ordering-product">
        <div class="ordering-product__image ordering-product-image">
            <nuxt-img
                class="ordering-product-image__img"
                src="assets/images/dev/products/product1.png"
                format="webp"
            />
        </div>
        <div class="ordering-product__info ordering-product-info">
            <div class="ordering-product-info__label">КРОВАТЬ</div>
            <div class="ordering-product-info__name">Классика</div>
            <div class="ordering-product-info__article">арт. 124-45678</div>
            <div class="ordering-product-info__price">4 499 ₽</div>
        </div>
        <div class="ordering-product__services ordering-product-services">
            <div class="ordering-product-services__title">Дополнительные услуги:</div>
            <div class="ordering-product-services__list ordering-product-services-list">
                <CustomCheckbox
                    v-for="item in services"
                    :key="`ordering-product-services-list-item-${item}`"
                    :size="Size.SMALL"
                    class="ordering-product-services-list__item"
                >
                    {{ item.text }}
                </CustomCheckbox>
            </div>
        </div>
        <div class="ordering-product__counter ordering-product-counter">
            <button
                type="button"
                class="ordering-product-counter__button ordering-product-counter__button--minus"
                @click="decreaseCount"
            ></button>
            <div class="ordering-product-counter__count">
                {{ count }}
            </div>
            <button
                type="button"
                class="ordering-product-counter__button ordering-product-counter__button--plus"
                @click="increaseCount"
            ></button>
        </div>
        <div class="ordering-product__total ordering-product-total"></div>
    </div>
</template>

<script setup lang="ts">
import CustomCheckbox from '~/components/UIComponents/formElements/CustomCheckbox'
import { Size } from '~/model/enums/formElements/Size'
import { ref } from '#imports'
const services = [
    {
        text: 'Подъем на этаж',
    },
    {
        text: 'Добавить сборку',
    },
]

const count = ref(1)
const increaseCount = () => count.value++
const decreaseCount = () => {
    if (count.value > 1) {
        count.value--
    }
}
</script>

<style lang="sass" scoped>
.ordering-product
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05)
    border-radius: 8px
    padding: 24px
    display: grid
    grid-template-columns: 100px minmax(70px, max-content) 1fr 60px minmax(70px, max-content)
    grid-gap: 24px
    +until-tablet
        padding: 16px
    +while-mob
        padding: 16px 8px
    &__counter
        align-self: flex-end
    &__services
        justify-self: center

.ordering-product-info
    display: flex
    flex-direction: column
    &__label
        font-size: 8px
        text-transform: uppercase
        color: $color_onsurface_tetriary
    &__name
        font-size: 16px
        font-weight: 600
    &__article
        font-size: 8px
        color: $color_onsurface_tetriary
    &__price
        font-size: 16px
        font-weight: 600
        margin-top: auto

.ordering-product-services
    display: flex
    flex-direction: column
    &__title
        font-weight: 600
    &__list
        margin: auto 0

.ordering-product-services-list
    display: grid
    grid-gap: 16px
    justify-items: flex-start

.ordering-product-image
    user-select: none
    position: relative
    background-color: $color_onsurface_quaternary
    width: 100%
    padding-top: 100%
    &__img
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        width: 100%

.ordering-product-counter
    display: flex
    align-items: center
    &__button
        background-color: $color_surface_primary
        width: 16px
        height: 16px
        position: relative
        border-radius: 50%
        border: 1px solid $color_onsurface_quaternary
        &::before
            content: ''
            position: absolute
            height: 1px
            width: 8px
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            background-color: $color_onsurface_tetriary
        &--plus
            &::after
                content: ''
                position: absolute
                height: 1px
                width: 8px
                top: 50%
                left: 50%
                transform: translate(-50%, -50%) rotate(90deg)
                background-color: $color_onsurface_tetriary
    &__count
        color: $color_onsurface_tetriary
        margin: 0 6px
</style>
