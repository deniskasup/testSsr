<template>
    <header class="header">
        <div class="header__main">
            <Wrapper class="header__wrapper">
                <CustomIcon class="header__logo" :to="linkWithCity('/')">
                    <img src="~/assets/images/logo.svg" alt="ВМ Мебель" />
                </CustomIcon>
                <div class="header__city header-city" @click="showSelectCity">
                    <CustomIcon
                        :icon-type="IconType.BUTTON"
                        class="header-city__icon no-select"
                        icon-name="akar-icons:location"
                    />
                    <!-- TODO: я хз, надо что то придумать со скаканием города-->
                    <div class="header-city__name">{{ selectedCityName }}</div>
                </div>
                <button class="header__mobile-menu header-mobile-menu">
                    <Icon class="header-mobile-menu__icon no-select" name="ri:menu-fill" />
                </button>
                <CustomSearch class="header__search" placeholder="Какую мебель вы ищите?" />
                <nav class="header__menu header-menu">
                    <!-- TODO нужен рефактор -->
                    <div
                        class="header-menu__item header-menu-item"
                        @mouseleave="setMenuVisibility('catalog', false)"
                        @mouseenter="setMenuVisibility('catalog', true)"
                    >
                        <NuxtLink :to="linkWithCity('catalog')" class="header-menu-item__link" @click.capture.prevent>
                            Каталог
                        </NuxtLink>
                        <transition name="header-dropdown">
                            <CatalogMenu v-show="menuVisibility.catalog" @hide="setMenuVisibility('catalog', false)" />
                        </transition>
                    </div>
                    <div class="header-menu__item header-menu-item">
                        <NuxtLink :to="linkWithCity('promo')" class="header-menu-item__link">Акции</NuxtLink>
                    </div>
                    <div
                        class="header-menu__item header-menu-item"
                        @mouseleave="setMenuVisibility('info', false)"
                        @mouseenter="setMenuVisibility('info', true)"
                    >
                        <NuxtLink
                            :to="linkWithCity('info/how-to-order')"
                            class="header-menu-item__link"
                            @click.capture.prevent
                        >
                            Инфо
                        </NuxtLink>
                        <transition name="header-dropdown">
                            <InfoMenu v-show="menuVisibility.info" @hide="setMenuVisibility('info', false)" />
                        </transition>
                    </div>
                </nav>
                <div class="header__contacts header-contacts">
                    <button type="button" class="header-contacts__button" @click="showNeedHelp">
                        <img src="~/assets/images/icons/call-help.svg" alt="" />
                    </button>
                    <div class="header-contacts__info header-contacts-info">
                        <div class="header-contacts-info__phone">8 800 999 99 99</div>
                        <div class="header-contacts-info__time">9:00 – 21:00 мск ежедневно</div>
                    </div>
                </div>
                <div class="header__actions header-actions">
                    <CustomIcon
                        :to="linkWithCity('personal')"
                        class="header-actions__item header-actions-item"
                        icon-name="ri:user-line"
                    />
                    <CustomIcon
                        :to="linkWithCity('favorite')"
                        class="header-actions__item header-actions-item"
                        icon-name="ri:heart-line"
                    />
                    <CustomIcon
                        :to="linkWithCity('cart/ordering')"
                        class="header-actions__item header-actions-item"
                        icon-name="ri:shopping-bag-2-line"
                    />
                </div>
            </Wrapper>
        </div>
        <div v-if="showSubMenu && subMenuLinks.length" class="header__additional-menu header-additional-menu">
            <Wrapper class="header-additional-menu__wrapper">
                <nav class="header-additional-menu__nav header-menu">
                    <div v-for="link in subMenuLinks" :key="link.id" class="header-menu__item header-menu-item">
                        <NuxtLink :to="linkWithCity(`catalog/${link.url}`)" class="header-menu-item__link">
                            {{ link.name }}
                        </NuxtLink>
                    </div>
                </nav>
            </Wrapper>
        </div>
    </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Wrapper from '~/components/Wrapper'
import CustomSearch from '~/components/UIComponents/formElements/CustomSearch.vue'
import CustomIcon from '~/components/UIComponents/CustomIcon.vue'
import { IconType } from '~/model/enums/IconType'
import useModals from '~/composition/useModals'
import { computed, reactive, ref, useRoute } from '#imports'
import { useCategoriesStore } from '~/composition/store/useCategoriesStore'
import { useCityStore } from '~/composition/store/useCityStore'
import linkWithCity from '~/helpers/linkWithCity'
import CatalogMenu from '~/components/Header/CatalogMenu.vue'
import InfoMenu from '~/components/Header/InfoMenu.vue'

const { showSelectCity, showNeedHelp } = useModals()
const route = useRoute()
const showSubMenu = computed(() => route.meta.showSubMenu)
const categoriesStore = useCategoriesStore()
const { selectedCityName } = storeToRefs(useCityStore())

const menuVisibility = reactive({
    catalog: false,
    info: false,
})

const setMenuVisibility = (menuName: 'catalog' | 'info', status: boolean) => {
    menuVisibility[menuName] = status
}

const subMenuLinks = computed(() => {
    const category = Array.isArray(route.params.category) ? route.params.category[0] : route.params.category
    if (route.params.category) {
        return categoriesStore.categoriesMapByUrl.get(category)?.subcategories || []
    }

    return categoriesStore.categoriesTree
})
</script>

<style lang="sass" scoped>
.header
    z-index: 5
    position: relative
    padding: 12px 0
    background: $color_surface_primary
    box-shadow: 0 1px 0 $color_onsurface_quaternary
    +while-mob
        padding: 8px 0

    &__main
        position: relative

    &::before
        content: ''
        position: absolute
        width: 100vw
        top: calc(50% - 21px)
        left: 50%
        transform: translate(-50%, -50%)
        height: 1px
        background-color: $color_onsurface_quaternary
        +from-tablet
            display: none
        +while-mob
            top: 50%

    &__wrapper
        align-items: center
        +until-tablet
            display: grid
            grid-gap: 24px 12px
            grid-template-columns: 140px 1fr 180px
        +while-mob
            grid-gap: 16px 12px
            grid-template-columns: 40px 1fr

    &__logo
        justify-self: flex-start
        margin-right: 27px
        +no-select
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
    cursor: pointer

    &__name
        +no-select
        +until-tablet
            font-size: 12px

    &__icon
        width: 18px
        height: 21px
        margin-right: 11px

.header-menu
    display: flex
    align-items: center
    &__item
        &:not(:last-of-type)
            margin-right: 24px

.header-menu-item
    &__link
        white-space: nowrap
        transition: color .3s
        +no-select
        &.disabled
            cursor: pointer
        &.router-link-active
            color: $color_primary

        &:not(.router-link-active):hover
            color: $color_onsurface_tetriary

.header-contacts
    display: grid
    grid-template-columns: 32px 1fr
    grid-gap: 12px

    &__button
        user-select: none
        display: flex
        align-items: center

.header-contacts-info
    &__phone
        color: $color_primary
        font-weight: 600
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
        +no-select

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


.header-additional-menu
    padding-top: 12px
    margin-top: 12px
    background: $color_surface_primary
    box-shadow: 0 -1px 0 $color_onsurface_quaternary
    +while-mob
        display: none

    &__nav
        flex-wrap: nowrap
        overflow-x: auto
        +hide-scrollbar

.header-dropdown-enter-active
    transition: opacity .5s, transform .5s
.header-dropdown-leave-active
    transition: opacity .35s .15s, transform .35s .15s


.header-dropdown-enter-from,
.header-dropdown-leave-to
    transform: translateY(10px)
    opacity: 0
</style>
