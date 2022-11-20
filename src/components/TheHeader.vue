<template>
    <header class="header">
        <Wrapper class="header__wrapper">
            <CustomIcon class="header__logo" to="/">
                <img src="~/assets/images/logo.svg" alt="ВМ Мебель" />
            </CustomIcon>
            <div class="header__city header-city">
                <Icon class="header-city__icon" name="akar-icons:location" />
                <div class="header-city__name">Санкт-Перербург</div>
            </div>
            <button class="header__mobile-menu header-mobile-menu">
                <Icon class="header-mobile-menu__icon" name="ri:menu-fill" />
            </button>
            <CustomSearch class="header__search" placeholder="Какую мебель вы ищите?" />
            <nav class="header__menu header-menu">
                <NuxtLink to="/catalog" class="header-menu__link"> Каталог</NuxtLink>
                <NuxtLink to="/promo" class="header-menu__link">Акции</NuxtLink>
                <NuxtLink to="/info" class="header-menu__link">Инфо</NuxtLink>
            </nav>
            <div class="header__contacts header-contacts">
                <button class="header-contacts__button">
                    <img src="~/assets/images/icons/call-help.svg" alt="" />
                </button>
                <div class="header-contacts__info header-contacts-info">
                    <div class="header-contacts-info__phone">8 800 999 99 99</div>
                    <div class="header-contacts-info__time">9:00 – 21:00 мск ежедневно</div>
                </div>
            </div>
            <div class="header__actions header-actions">
                <CustomIcon
                    to="/personal"
                    class="header-actions__item header-actions-item"
                    icon-name="ri:user-line"
                />
                <CustomIcon
                    to="/favorite"
                    class="header-actions__item header-actions-item"
                    icon-name="ri:heart-line"
                />
                <CustomIcon
                    to="/cart"
                    class="header-actions__item header-actions-item"
                    icon-name="ri:shopping-bag-2-line"
                />
            </div>
        </Wrapper>
    </header>
</template>

<script setup lang="ts">
import Wrapper from '~/components/Wrapper'
import CustomSearch from '~/components/UIComponents/formElements/CustomSearch.vue'
import CustomIcon from '~/components/UIComponents/CustomIcon.vue'
</script>

<style lang="sass" scoped>
.header
    position: relative
    padding: 12px 0
    background: $color_surface_primary
    box-shadow: 0 1px 0 $color_onsurface_quaternary
    +while-mob
        padding: 8px 0

    &::before
        content: ''
        position: absolute
        width: 100vw
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        height: 1px
        background-color: $color_onsurface_quaternary
        +from-tablet
            display: none

    &__wrapper
        align-items: center
        +until-tablet
            padding: 0 60px
            display: grid
            grid-gap: 24px 12px
            grid-template-columns: 140px 1fr 180px
        +media-until(767px)
            padding: 0 16px
        +while-mob
            grid-gap: 16px 12px
            grid-template-columns: 40px 1fr

    &__logo
        margin-right: 27px
        +until-tablet
            margin-right: 0
            order: 1

    &__city
        margin-right: 40px
        +until-tablet
            margin-right: 0
            order: 4
        +while-mob
            display: none !important

    &__search
        max-width: 300px
        +media-until(1100px)
            max-width: 250px
        +until-tablet
            max-width: 300px
            order: 5
        +while-mob
            max-width: unset

    &__contacts
        margin-right: 30px
        +until-tablet
            margin-left: auto
            margin-right: 0
            order: 6
        +while-mob
            display: none !important

    &__menu
        margin: 0 auto
        +until-tablet
            margin: 0
            order: 2
        +while-mob
            display: none !important

    &__actions
        +until-tablet
            margin-left: auto
            order: 3
        +while-mob
            order: 2

    &__mobile-menu
        display: none
        +while-mob
            display: block
            order: 3

.header-city
    display: flex
    align-items: center

    &__name
        +until-tablet
            font-size: 12px

    &__icon
        width: 18px
        height: 21px
        margin-right: 11px

.header-menu
    display: flex
    align-items: center

    &__link
        transition: color .3s

        &:not(:last-of-type)
            margin-right: 24px

        &.router-link-active
            color: $color_primary

        &:not(.router-link-active):hover
            color: $color_onsurface_tetriary

.header-contacts
    display: grid
    grid-template-columns: 32px 1fr
    grid-gap: 12px

    &__button
        display: flex
        align-items: center

.header-contacts-info
    &__phone
        color: $color_primary
        font-weight: 700
        font-size: 16px
        line-height: 20px

    &__time
        font-size: 10px
        line-height: 12px

.header-actions
    display: flex
    align-items: center

    &__item
        width: 24px
        height: 24px

        &:not(:last-of-type)
            margin-right: 14px

.header-actions-item
    transition: color .3s
    color: $color_onsurface_secondary

    &.router-link-active
        color: $color_primary

    &:not(.router-link-active):hover
        color: $color_onsurface_tetriary

.header-mobile-menu
    margin-right: auto

    &__icon
        width: 24px
        height: 24px
</style>
