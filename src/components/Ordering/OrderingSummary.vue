<template>
    <div class="ordering-summary">
        <div class="ordering-summary__price ordering-summary-price">
            <div class="ordering-summary-price__total ordering-summary-price-total">
                <div class="ordering-summary-price-total__count">3 товара</div>
                <div class="ordering-summary-price-total__sum">8 999 ₽</div>
            </div>
            <div class="ordering-summary-price__line ordering-summary-price-line">
                <div class="ordering-summary-price-line__label">Сумма без скидки</div>
                <div class="ordering-summary-price-line__value">10 399 ₽</div>
            </div>
            <div class="ordering-summary-price__line ordering-summary-price-line">
                <div class="ordering-summary-price-line__label">Сумма скидки</div>
                <div class="ordering-summary-price-line__value">1 400 ₽</div>
            </div>
            <CustomButton class="ordering-summary-price__buy"> Купить </CustomButton>
        </div>
        <div class="ordering-summary__form ordering-summary-form">
            <div class="ordering-summary-form__promocode ordering-summary-form-promocode">
                <CustomTextInput
                    label="Промокод"
                    placeholder="Введите промокод, если знаете"
                    class="ordering-summary-form-promocode__promocode"
                />
                <CustomButton class="ordering-summary-form-promocode__promo-button" priority="secondary" size="s">
                    Применить
                </CustomButton>
            </div>
            <CustomButton class="ordering-summary-form__buy"> Купить </CustomButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import CustomTextInput from '~/components/UIComponents/formElements/CustomTextInput.vue'
import CustomButton from '~/components/UIComponents/formElements/CustomButton.vue'
</script>

<style lang="sass" scoped>
.ordering-summary
    display: grid
    grid-gap: 40px
    +media-until(1023px)
        align-items: flex-start
        grid-template-columns: 220px 1fr
        grid-gap: 100px
    +media-until(767px)
        grid-gap: 40px
    +while-mob
        grid-template-columns: 100%
        grid-gap: 32px

.ordering-summary-price
    display: grid
    grid-gap: 8px
    &__buy
        margin-top: 35px
        +media-from(1023px)
            display: none
        +while-mob
            display: none

.ordering-summary-price-total
    display: grid
    grid-gap: 4px
    &__count
        font-size: 12px
        color: $color_onsurface_tetriary

    &__sum
        font-weight: 600
        font-size: 26px
        line-height: 1.15
        +until-tablet
            font-size: 20px

.ordering-summary-price-line
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%

    &__label
        font-size: 12px
        color: $color_onsurface_tetriary

    &__value
        font-weight: 600
        font-size: 16px


.ordering-summary-form
    display: grid
    grid-gap: 40px
    &__buy
        +media-until(1023px)
            display: none
        +while-mob
            display: block

.ordering-summary-form-promocode
    display: grid
    grid-gap: 16px
</style>
