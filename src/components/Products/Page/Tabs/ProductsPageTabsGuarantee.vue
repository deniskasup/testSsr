<template>
    <div class="product-guarantee">
        <div class="product-guarantee__info product-guarantee-info">
            <div class="product-guarantee-info__text product-guarantee-info-text">
                <h3 class="product-guarantee-info-text__title">Гарантия</h3>
                <div class="product-guarantee-info-text__description">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua.
                </div>
            </div>
            <div class="product-guarantee-info__sertificates product-guarantee-info-sertificates">
                <a class="product-guarantee-info-sertificates__item product-guarantee-info-sertificates-item" href="#">
                    <Icon name="ri:file-line" class="product-guarantee-info-sertificates-item__icon" />
                    Сертификат качества ЛДСП
                </a>
                <a class="product-guarantee-info-sertificates__item product-guarantee-info-sertificates-item" href="#">
                    <Icon name="ri:file-line" class="product-guarantee-info-sertificates-item__icon" />
                    Сертификат качества ЛДСП
                </a>
                <a class="product-guarantee-info-sertificates__item product-guarantee-info-sertificates-item" href="#">
                    <Icon name="ri:file-line" class="product-guarantee-info-sertificates-item__icon" />
                    Сертификат качества ЛДСП
                </a>
            </div>
            <button type="button" class="product-guarantee-info__question" @click="showNeedHelp">
                💬    Задать вопрос менеджеру
            </button>
        </div>
        <div class="product-guarantee__sertificates product-guarantee-sertificates">
            <div class="product-guarantee-sertificates__item">
                <nuxt-img format="webp" src="assets/images/dev/sertificate.png" />
            </div>
            <div class="product-guarantee-sertificates__item">
                <nuxt-img format="webp" src="assets/images/dev/sertificate.png" />
            </div>
            <div class="product-guarantee-sertificates__item">
                <nuxt-img format="webp" src="assets/images/dev/sertificate.png" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useModals from '~/composition/useModals'

const { showNeedHelp } = useModals()
</script>

<style lang="sass" scoped>
.product-guarantee
    display: grid
    grid-template-columns: repeat(6, 1fr)
    grid-gap: 32px
    &__info
        grid-column: span 2
    &__sertificates
        grid-column: span 4

.product-guarantee-info
    display: grid
    grid-gap: 40px
    justify-items: flex-start
    &__question
        color: $color_primary
        font-size: 18px
        font-weight: 500
        display: flex
        align-items: center

.product-guarantee-info-text
    &__title
        +h3
        margin-bottom: 24px
    &__description
        font-size: 14px
        color: $color_onsurface_secondary

.product-guarantee-info-sertificates
    display: grid
    grid-gap: 14px
    &__item
        display: flex
        align-items: center

.product-guarantee-info-sertificates-item
    font-size: 12px
    &__icon
        margin-right: 7px
        color: $color_onsurface_tetriary
        width: 22px
        height: 22px

.product-guarantee-sertificates
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-gap: 13px
    &__item
        padding: 14px
        background-color: $color_surface_primary
        & img
            width: 100%
            height: 100%
            background-size: contain
</style>
