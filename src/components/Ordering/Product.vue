<template>
    <div class="ordering-product">
        <button type="button" class="ordering-product__delete">
            <Icon name="ri:close-fill" size="20" />
        </button>
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
        <div class="ordering-product__total ordering-product-total">
            <div class="ordering-product-total__old">2 500 ₽</div>
            <div class="ordering-product-total__new">4 500 ₽</div>
        </div>
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
    position: relative
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05)
    border-radius: 8px
    padding: 24px
    display: grid
    grid-template-columns: 100px minmax(70px, max-content) 1fr 60px minmax(70px, max-content)
    grid-gap: 24px
    +until-tablet
        padding: 16px
    +media-until(767px)
        grid-gap: 8px 16px
        grid-template-columns: minmax(135px, 160px) minmax(calc(50% - 8px), 1fr)
    +media-until(400px)
        grid-template-columns: minmax(calc(50% - 8px), 160px) minmax(calc(50% - 8px), 1fr)

    +while-mob
        padding: 16px 8px

    &__delete
        color: $color_onsurface_tetriary
        position: absolute
        top: 24px
        right: 24px
        +until-tablet
            top: 16px
            right: 16px
        +while-mob
            top: 16px
            right: 8px

    &__counter
        align-self: flex-end
        +media-until(767px)
            order: 3
    &__image
        +media-until(767px)
            grid-row: span 3
            order: 1
    &__info
        +media-until(767px)
            order: 2
    &__services
        justify-self: center
        +media-until(767px)
            margin-top: 16px
            justify-self: flex-start
            grid-column: -1/1
            order: 4

    &__total
        align-self: flex-end
        justify-self: flex-end
        +media-until(767px)
            justify-self: flex-start
            order: 3

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
        +while-mob
            font-size: 14px

    &__article
        font-size: 8px
        color: $color_onsurface_tetriary
    &__price
        font-size: 16px
        font-weight: 600
        margin-top: auto
        +media-until(767px)
            font-size: 14px

.ordering-product-services
    display: flex
    flex-direction: column
    &__title
        line-height: 1.1
        font-weight: 600
        margin-bottom: 10px

    &__list
        margin: auto 0

.ordering-product-services-list
    display: grid
    grid-gap: 16px
    justify-items: flex-start
    +media-until(767px)
        display: flex
        flex-wrap: wrap

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

.ordering-product-total
    display: flex
    flex-direction: column
    +media-until(767px)
        flex-direction: row-reverse
    &__old
        color: $color_onsurface_tetriary
        text-decoration: line-through
        +media-until(767px)
            font-size: 12px
    &__new
        font-size: 20px
        font-weight: 600
        line-height: 1
        +media-until(767px)
            font-size: 14px
            margin-right: 8px
</style>
