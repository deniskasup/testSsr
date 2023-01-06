<template>
    <footer class="footer">
        <Wrapper class="footer__wrapper">
            <div class="footer__logo">
                <img src="~/assets/images/footer-logo.png" alt="ВМ Мебель" />
            </div>
            <div class="footer__info footer-info">
                <div class="footer-info__title">Контакты</div>
                <div class="footer-info__phone">
                    <a href="tel:+7 (968) 633 77 57">+7 (968) 633 77 57</a>
                </div>
                <div class="footer-info__time">9:00 – 21:00 мск ежедневно</div>
                <div class="footer-info__email">
                    <a href="mailto:vmmebelmanager@gmail.com">vmmebelmanager@gmail.com</a>
                </div>
                <button type="button" class="footer-info__callback" @click="showNeedHelp">Заказать звонок</button>
                <FooterSocials :links="testLinks" class="footer-info__socials" />
                <div class="footer-info__links">
                    <a href="#">Публичная оферта</a>
                    <a href="#">Политика конфиденциальности</a>
                </div>
                <div class="footer-info__copyright">© ВМмебель, {{ new Date().getFullYear() }}</div>
            </div>
            <nav class="footer__nav footer-nav">
                <div class="footer-nav__column footer-nav-column">
                    <div class="footer-nav-column__title">Каталог</div>
                    <div class="footer-nav-column__list footer-nav-column-list">
                        <NuxtLink
                            v-for="link in categoriesTree"
                            :key="link.id"
                            :to="linkWithCity(`catalog/${link.url}`)"
                            class="footer-nav-column-list__item"
                        >
                            {{ link.name }}
                        </NuxtLink>
                    </div>
                </div>
                <div class="footer-nav__column footer-nav-column">
                    <div class="footer-nav-column__title">Для покупателей</div>
                    <div class="footer-nav-column__list">
                        <NuxtLink
                            v-for="link in infoLinks"
                            :key="`footer-link-info-${link.id}`"
                            class="footer-nav-column-list__item"
                            :to="linkWithCity(link.to)"
                        >
                            {{ link.name }}
                        </NuxtLink>
                    </div>
                </div>
            </nav>
            <FooterSocials :links="testLinks" class="footer__socials" />
        </Wrapper>
    </footer>
</template>

<script setup lang="ts">
import Wrapper from '~/components/Wrapper'
import { infoLinks } from '~/constants/infoLinks'
import { useCategoriesStore } from '~/composition/store/useCategoriesStore'
import linkWithCity from '~/helpers/linkWithCity'
import useModals from '~/composition/useModals'
const { categoriesTree } = useCategoriesStore()
const { showNeedHelp } = useModals()
// TODO: убрать
const testLinks = [
    {
        id: '1',
        url: '#',
        icon: 'ri:whatsapp-fill',
    },
    {
        id: '2',
        url: '#',
        icon: 'mdi:vk',
    },
    {
        id: '3',
        url: '#',
        icon: 'ri:instagram-fill',
    },
    {
        id: '4',
        url: '#',
        icon: 'ri:youtube-fill',
    },
]
</script>

<style lang="sass" scoped>
.footer
    color: $color_surface_primary
    padding: 40px 0
    background-color: $color_onsurface_tetriary
    +media-until(767px)
        padding: 24px 0

    &__wrapper
        display: grid
        grid-gap: 24px
        grid-template-columns: 1fr 1fr 24px
        +until-tablet
            grid-template-columns: 1fr 2fr 24px
            padding: 0 60px
        +media-until(768px)
            grid-template-columns: 1fr 2fr
        +media-until(767px)
            padding: 0 16px
        +while-mob
            grid-template-columns: 1fr


    &__logo
        grid-column: -1/1
        +while-mob
            order: 1

    &__nav
        +while-mob
            order: 2

    &__info
        +while-mob
            order: 3

    &__socials
        +media-until(768px)
            display: none !important

//TODO: разобраться с весом стилей
.footer .footer-info
    display: flex
    flex-direction: column
    align-items: flex-start
    +while-mob
        margin-top: 16px

    &__title
        font-weight: 600
        font-size: 20px
        line-height: 24px
        margin-bottom: 24px
        +media-until(768px)
            font-size: 17px
        +while-mob
            font-size: 16px
            margin-bottom: 16px

    &__phone, &__email
        font-size: 16px

    &__email
        margin-bottom: 24px
        +while-mob
            margin-bottom: 16px

    &__time
        margin-bottom: 12px
        font-size: 12px

    &__callback
        font-size: 16px
        margin-bottom: 40px
        +media-until(768px)
            margin-bottom: 12px

    &__socials
        display: none
        margin-bottom: 40px
        align-self: flex-start
        +media-until(768px)
            display: flex
            align-items: center


    &__links
        display: grid
        grid-gap: 8px
        margin-top: auto

        & a
            font-size: 12px
            color: $color_onsurface_quaternary

    &__copyright
        margin-top: 24px

.footer-nav
    display: grid
    grid-template-columns: 4fr 7fr
    +media-until(768px)
        grid-template-columns: 4fr 5fr
    +while-mob
        display: flex
        flex-direction: row-reverse
        justify-content: space-between


.footer-nav-column
    &:first-of-type
        +while-mob
            margin: 0 auto

    &:last-of-type
        margin-right: 16px

    &__title
        font-weight: 600
        font-size: 20px
        line-height: 24px
        margin-bottom: 24px
        +media-until(768px)
            font-size: 17px
        +while-mob
            font-size: 16px
            margin-bottom: 16px

    &__list
        display: grid
        grid-gap: 8px
        font-size: 16px
        +while-mob
            font-size: 14px

.footer-nav-column-list
    &__item
        transition: color .3s, opacity .3s
        +no-select
        &.router-link-active
            color: $color_primary

        &:not(.router-link-active):hover
            opacity: .7
</style>
