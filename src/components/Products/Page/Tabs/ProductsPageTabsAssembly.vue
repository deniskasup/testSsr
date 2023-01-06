<template>
    <div class="product-assembly">
        <div class="product-assembly__info product-assembly-info">
            <h3 class="product-assembly-info__title">Сборка кровати "Амелия"</h3>
            <div class="product-assembly-info__files"></div>
            <div class="product-assembly-info__services product-assembly-info-services">
                <div class="product-assembly-info-services__title">
                    Вы может воспользоваться нашими услугами сборки или собрать самостоятельно
                </div>
                <div class="product-assembly-info-services__list product-assembly-info-services-list">
                    <div class="product-assembly-info-services-list__item">
                        <span>Услуга сборки</span>
                        <b>1 000 ₽</b>
                    </div>
                </div>
            </div>
            <button type="button" class="product-assembly-info__question" @click="showNeedHelp">
                💬    Задать вопрос менеджеру
            </button>
        </div>
        <div v-if="product.instructionVideo" class="product-assembly__video product-assembly-video">
            <iframe
                :src="product.instructionVideo"
                title="Инструкция по сборке"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { Product } from '~/api/product/interfaces/Product'
import useModals from '~/composition/useModals'

const { showNeedHelp } = useModals()

defineProps({
    product: {
        type: Object as PropType<Product>,
        required: true,
    },
})
</script>

<style lang="sass" scoped>
.product-assembly
    display: grid
    grid-template-columns: 1fr 1fr


.product-assembly-info
    max-width: 355px
    display: flex
    flex-direction: column
    &__title
        +h3
        margin-bottom: 37px

    &__question
        color: $color_primary
        font-size: 18px
        font-weight: 500
        display: flex
        align-items: center
        margin-top: auto

.product-assembly-info-services
    &__title
        font-size: 16px
        font-weight: 500
        margin-bottom: 24px

.product-assembly-info-services-list
    display: grid
    grid-gap: 12px
    &__item
        display: flex
        & span
            margin-right: 43px

.product-assembly-video
    position: relative
    padding-top: 63.5%
    & iframe
        position: absolute
        width: 100%
        height: 100%
        top: 0
        left: 0
</style>
