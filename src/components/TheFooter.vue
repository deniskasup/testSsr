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
                    <a href="mailto:vmmebelmanager@gmail.com"
                        >vmmebelmanager@gmail.com</a
                    >
                </div>
                <button type="button" class="footer-info__callback">
                    Заказать звонок
                </button>
                <div class="footer-info__links">
                    <a href="#">Публичная оферта</a>
                    <a href="#">Политика конфеденциальности</a>
                </div>
                <div class="footer-info__copyright">
                    © ВМмебель, {{ new Date().getFullYear() }}
                </div>
            </div>
            <nav class="footer__nav footer-nav">
                <div class="footer-nav__column footer-nav-column">
                    <div class="footer-nav-column__title">Каталог</div>
                    <div class="footer-nav-column__list">
                        <a href="#">Кровати</a>
                        <a href="#">Матрасы</a>
                        <a href="#">Спальни</a>
                        <a href="#">Шкафы</a>
                        <a href="#">Комоды</a>
                        <a href="#">Стенки</a>
                        <a href="#">Кухни</a>
                        <a href="#">Прихожие</a>
                    </div>
                </div>
                <div class="footer-nav__column footer-nav-column">
                    <div class="footer-nav-column__title">Для покупателей</div>
                    <div class="footer-nav-column__list">
                        <a href="#">Как заказать</a>
                        <a href="#">Доставка</a>
                        <a href="#">Гарантия</a>
                        <a href="#">Производителям и поставщикам</a>
                        <a href="#">Дропшиппинг</a>
                        <a href="#">Контроль качества</a>
                        <a href="#">Опт для интернет-магазинов</a>
                        <a href="#">Карта сайта</a>
                    </div>
                </div>
            </nav>
            <div class="footer__socials footer-socials">
                <a href="#"
                    ><Icon class="footer-socials__icon" name="ri:whatsapp-fill"
                /></a>
                <a href="#"
                    ><Icon class="footer-socials__icon" name="mdi:vk"
                /></a>
                <a href="#"
                    ><Icon
                        class="footer-socials__icon"
                        name="ri:instagram-fill"
                /></a>
                <a href="#"
                    ><Icon class="footer-socials__icon" name="ri:youtube-fill"
                /></a>
            </div>
        </Wrapper>
    </footer>
</template>

<script setup lang="ts">
import Wrapper from '~/components/Wrapper'
</script>

<style lang="sass" scoped>
.footer
    color: $color_surface_primary
    padding: 40px 0
    background-color: $color_onsurface_tetriary

    &__wrapper
        display: grid
        grid-gap: 24px
        grid-template-columns: 1fr 1fr 24px

    &__logo
        grid-column: -1/1

.footer-info
    display: flex
    flex-direction: column
    align-items: flex-start

    &__title
        font-weight: 700
        font-size: 20px
        line-height: 24px
        margin-bottom: 24px

    &__phone, &__email
        font-size: 16px

    &__email
        margin-bottom: 24px

    &__time
        margin-bottom: 12px
        font-size: 12px

    &__callback
        font-size: 16px

        margin-bottom: 40px

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

.footer-nav-column
    &__title
        font-weight: 700
        font-size: 20px
        line-height: 24px
        margin-bottom: 24px

    &__list
        display: grid
        grid-gap: 8px
        font-size: 16px

.footer-socials
    display: grid
    grid-gap: 16px
    justify-self: center
    align-self: center
    &__icon
        width: 24px
        height: 24px
</style>
