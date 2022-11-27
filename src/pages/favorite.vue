<template>
    <main class="default-page favorite-page">
        <section class="favorite">
            <Wrapper class="favorite__wrapper">
                <h2 class="favorite__title">Избранное</h2>

                <div v-if="true" class="favorite__list favorite-list">
                    <ProductCard
                        v-for="item in 9"
                        :key="`favorite-list-item-${item}`"
                        class="favorite-list__item"
                    />
                    <div class="favorite-list__controls favorite-list-controls">
                        <CustomButton
                            :priority="ButtonPriority.SECONDARY"
                            class="favorite-list-controls__show-more"
                        >
                            Показать больше
                        </CustomButton>
                    </div>
                </div>

                <div v-else class="favorite__empty favorite-empty">
                    <div class="favorite-empty__smile">😔</div>
                    <div class="favorite-empty__text favorite-empty-text">
                        <div class="favorite-empty-text__title">В избранном ничего нет</div>
                        <div class="favorite-empty-text__description">
                            Посмотрите наш <NuxtLink to="/catalog">каталог</NuxtLink> или
                            воспользуйтесь поиском, если ищите что-то конкретное
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
        <NeedHelp />
    </main>
</template>

<script setup lang="ts">
import { definePageMeta, useHead } from '#imports'
import ProductCard from '~/components/Products/ProductCard.vue'
import CustomButton from '~/components/UIComponents/formElements/CustomButton.vue'
import { ButtonPriority } from '~/model/enums/formElements/ButtonPriority'
definePageMeta({
    layout: 'with-breadcrumbs',
    title: 'Избранное',
})
useHead({
    title: 'Избранное',
    meta: [
        {
            name: 'description',
            content: 'Избранное',
        },
    ],
})
</script>

<style lang="sass" scoped>
.favorite
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

.favorite-list
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

.favorite-list-controls
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

.favorite-empty
    display: grid
    align-items: baseline
    grid-template-columns: 30px 1fr
    grid-gap: 16px
    &__smile
        font-weight: 600
        font-size: 26px

.favorite-empty-text
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
