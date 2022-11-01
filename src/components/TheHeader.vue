<template>
    <header class="header">
        <Wrapper class="header__wrapper">
            <NuxtLink class="header__logo" to="/">
                <img src="~/assets/images/logo.svg" alt="ВМ Мебель" />
            </NuxtLink>
            <div class="header__city header-city">
                <Icon class="header-city__icon" name="akar-icons:location" />
                <div class="header-city__name">Москва</div>
            </div>
            <CustomSearch
                class="header__search"
                placeholder="Какую мебель вы ищите?"
            />
            <nav class="header__menu header-menu">
                <NuxtLink to="/catalog" class="header-menu__link">
                    Каталог
                </NuxtLink>
                <NuxtLink to="/promo" class="header-menu__link">Акции</NuxtLink>
                <NuxtLink to="/info" class="header-menu__link">Инфо</NuxtLink>
            </nav>
            <div class="header__contacts header-contacts">
                <button class="header-contacts__button">
                    <img src="~/assets/images/icons/call-help.svg" alt="" />
                </button>
                <div class="header-contacts__info header-contacts-info">
                    <div class="header-contacts-info__phone">
                        8 800 999 99 99
                    </div>
                    <div class="header-contacts-info__time">
                        9:00 – 21:00 мск ежедневно
                    </div>
                </div>
            </div>
            <div class="header__actions header-actions">
                <Icon class="header-actions__item" name="ri:user-line" />
                <Icon class="header-actions__item" name="ri:heart-line" />
                <Icon
                    class="header-actions__item"
                    name="ri:shopping-bag-2-line"
                />
            </div>
        </Wrapper>
    </header>
</template>

<script setup lang="ts">
import Wrapper from '~/components/Wrapper'
import CustomSearch from '~/components/UIComponents/formElements/CustomSearch.vue'
</script>

<style lang="sass" scoped>
.header
    padding: 12px 0
    background: $color_surface_primary
    box-shadow: 0 1px 0 #F2F2F2

    &__wrapper
        align-items: center

    &__logo
        margin-right: 27px

    &__city
        margin-right: 40px

    &__search
        max-width: 300px

    &__menu
        margin: 0 auto

.header-city
    display: flex
    align-items: center

    &__icon
        width: 18px
        height: 21px
        margin-right: 11px

.header-menu
    display: flex
    align-items: center

    &__link
        &:not(:last-of-type)
            margin-right: 24px

        &.router-link-active
            font-weight: bold

.header-contacts
    display: grid
    grid-template-columns: 32px 1fr
    grid-gap: 12px
    margin-right: 30px
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
        color: $color_onsurface_secondary
        &:not(:last-of-type)
            margin-right: 14px
</style>
