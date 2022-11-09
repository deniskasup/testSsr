<template>
    <section class="our-goal">
        <div class="our-goal__left">
            <Wrapper class="our-goal__wrapper">
                <div class="our-goal__content our-goal-content">
                    <div class="our-goal-content__title">
                        Наша цель — воплотить в жизнь ваши мечты об интерьере.
                        <br />Создавайте обстановку, которая делает будни ярче!
                    </div>
                    <div class="our-goal-content__text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet.
                    </div>
                </div>
            </Wrapper>
        </div>
        <div class="our-goal__right">
            <div class="our-goal-video">
                <nuxt-img
                    format="webp"
                    class="our-goal-video__image"
                    src="assets/images/our-goal-background.png"
                />
                <CustomIcon :icon-type="IconType.BUTTON" class="our-goal-video__icon"></CustomIcon>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Wrapper from '~/components/Wrapper.vue'
import CustomIcon from '~/components/UIComponents/CustomIcon.vue'
import { IconType } from '~/model/enums/IconType'
</script>

<style lang="sass" scoped>
.our-goal
    position: relative
    display: grid
    grid-template-columns: 50% 50%
    +until-tablet
        grid-template-columns: 100%

    &__wrapper
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        display: grid
        grid-template-columns: 1fr 1fr
        grid-gap: 50px
        +until-tablet
            top: unset
            left: unset
            position: static
            transform: none
            grid-template-columns: 100%

    &__left
        background-color: $color_onsurface_quaternary

.our-goal-video
    z-index: 2
    overflow: hidden
    position: relative
    width: 100%
    padding-top: 100%
    +until-tablet
        padding-top: 62.5%

    &:hover
        & .our-goal-video__image
            transform: scale(1.01)

    &__icon
        z-index: 2
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        width: 83px
        height: 83px
        border-radius: 50%
        background-color: rgba(255, 255, 255, 0.3)
        border: 1.5px solid #FFFFFF
        transition: background-color .3s

        &:hover
            background-color: rgba(255, 255, 255, 0.5)

        +while-mob
            width: 47px
            height: 47px

        &::before
            content: ''
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            width: 30px
            height: 30px
            background-size: contain
            background-repeat: no-repeat
            background-position: center
            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyMCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjM4ODcgMTEuMTM0MkMyMC4wNTUzIDExLjUxOTEgMjAuMDU1MyAxMi40ODEzIDE5LjM4ODcgMTIuODY2MkwxLjU1NTM0IDIzLjE2MjNDMC44ODg2NzEgMjMuNTQ3MiAwLjA1NTMzODcgMjMuMDY2MSAwLjA1NTMzODggMjIuMjk2M0wwLjA1NTMzOTcgMS43MDQxM0MwLjA1NTMzOTcgMC45MzQzMzMgMC44ODg2NzQgMC40NTMyMSAxLjU1NTM0IDAuODM4MTExTDE5LjM4ODcgMTEuMTM0MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=)
            +while-mob
                width: 16px
                height: 16px

    &__image
        transition: transform .5s
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        object-fit: cover
        object-position: center

.our-goal-content
    max-width: 85%
    display: grid
    grid-gap: 32px
    +until-tablet
        grid-gap: 24px
        padding: 40px 0
        max-width: unset
    +while-mob
        grid-gap: 8px

    &__title
        font-weight: 700
        font-size: 26px
        line-height: 30px
        +media-until(1200px)
            font-size: 22px
            line-height: 1.25
        +until-tablet
            font-size: 20px
        +while-mob
            font-size: 14px

    &__text
        +while-mob
            font-size: 12px
</style>
