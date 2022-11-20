<template>
    <div class="review-card">
        <nuxt-img
            class="review-card__image"
            format="webp"
            :src="`assets/images/dev/reviews/review${reviewCardInfo}.png`"
        />
        <div class="review-card__info review-card-info">
            <div
                class="review-card-info__stars review-card-info-stars"
                :class="`review-card-info-stars--${reviewCardInfo}`"
            >
                <Icon
                    v-for="star in 5"
                    :key="`review-star-icon-${reviewCardInfo}-${star}`"
                    class="review-card-info-stars__item"
                    name="ri:star-s-fill"
                />
            </div>
            <div class="review-card-info__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam, cum ea
                error expedita ipsam iusto provident quam qui ratione recusandae, sint ut! A ad
                aliquid aspernatur assumenda beatae delectus eveniet id impedit inventore,
                laudantium maiores maxime nam nisi quaerat, quia quisquam sed, sequi velit vitae
                voluptatum! Cum doloremque molestias quidem reprehenderit unde vel?
            </div>
            <CustomIcon icon-name="radix-icons:external-link" class="review-card-info__link" />
        </div>
    </div>
</template>

<script setup lang="ts">
import CustomIcon from '~/components/UIComponents/CustomIcon.vue'

defineProps({
    // TODO: поменять
    reviewCardInfo: {
        type: Number,
        default: 0,
    },
})
</script>

<style lang="sass" scoped>
.review-card
    overflow: hidden
    position: relative
    &:hover .review-card-info
        height: 100%
        -webkit-backdrop-filter: blur(5px)
        backdrop-filter: blur(5px)
        &__description
            -webkit-line-clamp: 20
    &__image
        width: 100%
        height: 100%
        object-fit: cover
.review-card-info
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    padding: 16px 24px
    height: 80px
    background-color: rgba(255, 255, 255, .3)
    transition: filter .3s, height .4s
    display: grid
    grid-gap: 10px 24px
    grid-template-columns: 1fr 24px
    color: $color_surface_primary
    align-content: flex-start
    justify-items: flex-start
    +media-until(767px)
         grid-template-columns: 1fr 18px
    +while-mob
        grid-template-columns: 1fr 12px
        padding: 4px 12px
        grid-gap: 4px 12px

    &__stars
        display: flex
        align-items: center
        grid-column: -1/1

    &__description
        max-width: 100%
        max-height: 100%
        overflow: hidden
        display: -webkit-box
        -webkit-line-clamp: 1
        -webkit-box-orient: vertical
        text-overflow: ellipsis
        +while-mob
            -webkit-line-clamp: 2
            font-size: 12px
            line-height: 1.2

    &__link
        width: 24px
        height: 24px
        +media-until(767px)
            width: 18px
            height: 18px
        +while-mob
            width: 12px
            height: 12px

.review-card-info-stars
    color: $color_onsurface_tetriary
    &__item
        width: 12px
        height: 12px

    &--1
        & .review-card-info-stars__item:first-of-type
            color: $color_surface_dangerous

    &--2
        & .review-card-info-stars__item
            &:nth-of-type(1), &:nth-of-type(2)
                color: $color_surface_dangerous

    &--3
        & .review-card-info-stars__item
            &:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3)
                color: $color_surface_dangerous

    &--4
        & .review-card-info-stars__item:not(:last-of-type)
            color: $color_surface_dangerous

    &--5
        & .review-card-info-stars__item
            color: $color_surface_dangerous
</style>
