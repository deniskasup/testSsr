<template>
    <section class="advantages">
        <Wrapper class="advantages__wrapper">
            <div
                v-for="advantage in advantages"
                :key="`advantages-item-${advantage.id}`"
                class="advantages__item advantages-item"
            >
                <div class="advantages-item__icon advantages-item-icon">
                    <nuxt-img
                        class="advantages-item-icon__image"
                        loading="lazy"
                        :src="`assets/images/advantages/${advantage.iconName}.svg`"
                    />
                </div>
                <div class="advantages-item__content advantages-item-content">
                    <div class="advantages-item-content__title">
                        {{ advantage.title }}
                    </div>
                    <div class="advantages-item-content__text" v-html="advantage.text"></div>
                </div>
            </div>
        </Wrapper>
    </section>
</template>

<script setup lang="ts">
import Wrapper from '~/components/Wrapper.vue'
import { advantages } from '~/constants/advantages'
</script>

<style lang="sass" scoped>
.advantages
    &__wrapper
        display: grid
        grid-template-columns: 1fr 1fr 1fr
        grid-gap: 64px 30px
        +until-tablet
            grid-template-columns: 1fr 1fr
        +media-until(767px)
            grid-template-columns: 100%
            grid-gap: 30px
        +while-mob
            grid-gap: 24px

.advantages-item
    display: flex
    align-items: center

    &__icon
        margin-right: 12px
        flex-shrink: 0
        width: 80px
        height: 80px
        +media-until(767px)
            margin-right: 12px
        +while-mob
            width: 60px
            height: 60px

.advantages-item-content
    display: grid
    grid-gap: 8px

    &__title
        font-weight: 600
        font-size: 20px
        line-height: 1
        +media-until(1200px)
            font-size: 18px
        +while-mob
            font-size: 14px

    &__text
        color: $color_onsurface_secondary
        +while-mob
            line-height: 14px
            font-size: 12px

.advantages-item-icon
    &__image
        width: 100%
        height: 100%
        object-fit: contain
</style>
