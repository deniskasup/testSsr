<template>
    <section class="main-reviews">
        <Wrapper class="main-reviews__wrapper">
            <h2 class="main-reviews__title">Отзывы</h2>
            <div class="main-reviews__list main-reviews-list">
                <ReviewCard
                    v-for="item in 6"
                    :key="`main-reviews-block-${item}`"
                    class="main-reviews-list__block"
                    :review-card-info="item"
                />
            </div>
            <CustomButton :priority="ButtonPriority.SECONDARY" class="main-reviews__show-more">
                Показать больше
            </CustomButton>
        </Wrapper>
    </section>
</template>

<script setup lang="ts">
import Wrapper from '~/components/Wrapper'
import CustomButton from '~/components/UIComponents/formElements/CustomButton.vue'
import { ButtonPriority } from '~/model/enums/formElements/ButtonPriority'
import ReviewCard from '~/components/Reviews/ReviewCard.vue'
</script>

<style lang="sass" scoped>

.main-reviews
    &__wrapper
        display: grid
        grid-template-columns: 100%
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

    &__show-more
        margin: 0 auto
        +while-mob
            margin: unset

.main-reviews-list
    display: grid
    grid-gap: 30px
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: repeat(8, 1fr)
    +until-tablet
        grid-gap: 24px
    +media-until(767px)
        grid-template-rows: unset
        grid-template-columns: 1fr 1fr
    +while-mob
        grid-gap: 20px

    &__block
        &:nth-of-type(1)
            +media-from(768px)
                grid-area: 1 / 1 / 4 / 2

        &:nth-of-type(2)
            +media-from(768px)
                grid-area: 1 / 2 / 6 / 3

        &:nth-of-type(3)
            +media-from(768px)
                grid-area: 1 / 3 / 4 / 4

        &:nth-of-type(4)
            +media-from(768px)
                grid-area: 4 / 1 / 9 / 2

        &:nth-of-type(5)
            +media-from(768px)
                grid-area: 6 / 2 / 9 / 3

        &:nth-of-type(6)
            +media-from(768px)
                grid-area: 4 / 3 / 9 / 4

        &:nth-of-type(4n + 1)
            +media-until(767px)
                grid-row: span 10
                & :deep(.review-card__image)
                    aspect-ratio: 136/200
        &:nth-of-type(4n + 2)
            +media-until(767px)
                grid-row: span 7
                & :deep(.review-card__image)
                    aspect-ratio: 1
        &:nth-of-type(4n + 3)
            +media-until(767px)
                grid-row: span 10
                & :deep(.review-card__image)
                    aspect-ratio: 136/200
        &:nth-of-type(4n + 4)
            +media-until(767px)
                grid-row: span 7
                & :deep(.review-card__image)
                    aspect-ratio: 1
</style>
