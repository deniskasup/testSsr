<template>
    <div class="product-info">
        <div class="product-info__head product-info-head">
            <h1 class="product-info-head__title">{{ product.pageTitle }}</h1>
            <div class="product-info-head__reviews product-info-head-reviews">
                <CustomStars size="s" disabled class="product-info-head-reviews__stars" />
                <div class="product-info-head-reviews__count">({{ product.reviews?.count }})</div>
            </div>
        </div>
        <div class="product-info__article product-info-article">Артикул: {{ product.article }}</div>
        <div class="product-info__price product-info-price">
            <div class="product-info-price__new">{{ product.price }} ₽</div>
            <template v-if="product.oldPrice">
                <div class="product-info-price__old">{{ product.oldPrice }} ₽</div>
                <div class="product-info-price__sale">{{ saleAmount }}%</div>
            </template>
            <div class="product-info-price__availability">
                {{ product.inStock ? 'В наличии' : 'Нет в наличии' }}
            </div>
        </div>
        <div v-if="product.bedOptions" class="product-info__bed-options"></div>
        <div
            v-if="product.additionalServices"
            class="product-info__additional-services product-info-additional-services"
        >
            <div class="product-info-additional-services__title">Дополнительные услуги:</div>
            <div class="product-info-additional-services__list product-info-additional-services-list">
                <CustomCheckbox
                    v-for="checkbox in product.additionalServices"
                    :key="checkbox.name"
                    notion="тестовый текст"
                    size="s"
                    class="product-info-additional-services-list__item"
                >
                    {{ checkbox.name }}
                </CustomCheckbox>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { Product } from '~/api/product/interfaces/Product'
import CustomStars from '~/components/UIComponents/formElements/CustomStars.vue'
import CustomCheckbox from '~/components/UIComponents/formElements/CustomCheckbox.vue'

const props = defineProps({
    product: {
        type: Object as PropType<Product>,
        required: true,
    },
})
const saleAmount = props.product?.oldPrice ? 100 - Math.ceil((props.product.price * 100) / props.product.oldPrice) : 0
</script>

<style lang="sass" scoped>
.product-info
    display: flex
    flex-direction: column
    &__head
        margin-bottom: 8px
    &__article
        margin-bottom: 12px

.product-info-head
    display: flex
    align-items: flex-start
    justify-content: space-between
    &__title
        +h2

.product-info-head-reviews
    margin-left: 20px
    margin-top: 5px
    display: flex
    align-items: center
    &__count
        margin-left: 5px
        color: $color_onsurface_tetriary

.product-info-article
    font-size: 10px
    color: $color_onsurface_tetriary

.product-info-price
    display: flex
    align-items: center
    &__new
        font-size: 20px
        font-weight: 600
        margin-right: 8px
        align-self: flex-end
    &__old
        color: $color_onsurface_tetriary
        text-decoration: line-through
        font-weight: 600
        align-self: flex-end
        font-size: 14px
        margin-bottom: 3px

        margin-right: 15px
    &__sale
        padding: 4px
        padding-left: 13px
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjY2ODI5IDBDNy45OTk2NyAwIDcuMzc1MjcgMC4zMzQxMjQgNy4wMDQzMiAwLjg5MDQxM0wwLjMzNjAyNCAxMC44OTA0Qy0wLjExMjAwOSAxMS41NjIzIC0wLjExMjAwOCAxMi40Mzc3IDAuMzM2MDI1IDEzLjEwOTZMNy4wMDQzMiAyMy4xMDk2QzcuMzc1MjcgMjMuNjY1OSA3Ljk5OTY3IDI0IDguNjY4MjkgMjRIMzcuNTk4MUMzOC43MDI2IDI0IDM5LjU5ODEgMjMuMTA0NiAzOS41OTgxIDIyVjJDMzkuNTk4MSAwLjg5NTQzMSAzOC43MDI2IDAgMzcuNTk4MSAwSDguNjY4MjlaTTUuNTk4MDcgMTRDNi43MDI2NCAxNCA3LjU5ODA3IDEzLjEwNDYgNy41OTgwNyAxMkM3LjU5ODA3IDEwLjg5NTQgNi43MDI2NCAxMCA1LjU5ODA3IDEwQzQuNDkzNSAxMCAzLjU5ODA3IDEwLjg5NTQgMy41OTgwNyAxMkMzLjU5ODA3IDEzLjEwNDYgNC40OTM1IDE0IDUuNTk4MDcgMTRaIiBmaWxsPSIjRjJGMkYyIi8+Cjwvc3ZnPgo=)
        background-size: contain
        background-position: center
        background-repeat: no-repeat

        font-weight: 600
        color: $color_primary
        font-size: 10px

    &__availability
        margin-left: auto
        font-size: 12px

.product-info-additional-services
    display: grid
    grid-gap: 20px
    margin-top: 40px
    &__title
        font-size: 14px
        font-weight: 600

.product-info-additional-services-list
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 34px
</style>
