<template>
    <div class="products-grid">
        <Wrapper class="products-grid__wrapper">
            <h2 class="products-grid__title">{{ title }}</h2>

            <div v-if="products.length" class="products-grid__list products-grid-list">
                <ProductsCard
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                    class="products-grid-list__item"
                />
                <div class="products-grid-list__controls products-grid-list-controls">
                    <CustomButton
                        v-if="isShowMoreButtonVisible"
                        :priority="ButtonPriority.SECONDARY"
                        class="products-grid-list-controls__show-more"
                    >
                        Показать больше
                    </CustomButton>
                </div>
            </div>

            <div v-else class="products-grid__empty products-grid-empty">
                <div class="products-grid-empty__smile">😔</div>
                <div class="products-grid-empty__text products-grid-empty-text">
                    <div class="products-grid-empty-text__title">В разделе "{{ title }}" ничего нет</div>
                    <!--                    <div class="products-grid-empty-text__description">-->
                    <!--                        Посмотрите наш <NuxtLink to="/catalog">каталог</NuxtLink> или воспользуйтесь поиском, если ищите-->
                    <!--                        что-то конкретное-->
                    <!--                    </div>-->
                </div>
            </div>
        </Wrapper>
    </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { CategoryProduct } from '~/api/categories/interfaces/CategoryProduct'
import CustomButton from '~/components/UIComponents/formElements/CustomButton.vue'
import { ButtonPriority } from '~/model/enums/formElements/ButtonPriority'
import { computed, ref, unref } from '#imports'

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    products: {
        type: Array as PropType<CategoryProduct[]>,
        default: () => [],
    },
})

const visibleProductsCount = ref(9)
const isShowMoreButtonVisible = computed(() => unref(visibleProductsCount) < props.products?.length)
</script>

<style lang="sass" scoped>
.products-grid
    &__wrapper
        display: grid
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

.products-grid-list
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-gap: 30px
    +media-until(767px)
        grid-template-columns: 1fr 1fr
        grid-gap: 20px
    +while-mob
        grid-gap: 16px

    &__controls
        grid-column: -1/1

.products-grid-list-controls
    padding-top: 25px
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-gap: 30px
    +media-until(767px)
        grid-template-columns: 1fr

    &__show-more
        grid-column: 2
        margin: 0 auto
        +media-until(767px)
            margin: unset
            grid-column: unset

.products-grid-empty
    display: grid
    align-items: baseline
    grid-template-columns: 30px 1fr
    grid-gap: 16px

    &__smile
        font-weight: 600
        font-size: 26px

.products-grid-empty-text
    display: grid
    grid-gap: 16px
    color: $color_onsurface_secondary
    +while-mob
        grid-gap: 8px

    &__title
        font-weight: 600
        font-size: 26px
        line-height: 30px
        +while-mob
            font-size: 20px

    &__description
        font-size: 16px
        +while-mob
            font-size: 14px

        & a
            color: $color_primary

            &:hover
                text-decoration: underline
</style>
