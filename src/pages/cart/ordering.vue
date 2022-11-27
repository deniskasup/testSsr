<template>
    <!--  TODO: уточнить, нужно ли перенести рендер на клиент  -->
    <section class="ordering">
        <ClientOnly>
            <Wrapper class="ordering__wrapper">
                <div class="ordering__info ordering-info">
                    <h2 class="ordering-info__title">Оформление заказа</h2>
                    <p class="ordering-info__notion ordering-info-notion">
                        <Icon class="ordering-info-notion__icon" name="ri:information-fill" />
                        Для оформления заказа необходимо заполнить номер, остальную информацию мы
                        можем уточнить позвонив
                    </p>
                </div>
                <div class="ordering__left ordering-left">
                    <div class="ordering__products">
                        <Product v-for="item in 2" />
                    </div>
                    <div class="ordering__customer-info ordering-left__item ordering-customer-info">
                        <CustomTextInput
                            class="ordering-customer-info__phone"
                            mask="+7 (###) ###-####"
                            :required="true"
                            label="Номер телефона"
                            placeholder="+7 (___) ___-____"
                        />
                        <CustomTextInput
                            class="ordering-customer-info__name"
                            :required="true"
                            label="Имя Фамилия"
                            placeholder="Имя Фамилия"
                        />
                        <CustomCheckbox class="ordering-customer-info__checkbox">
                            Я согласен с <a href="#">условиями передачи информации</a>
                        </CustomCheckbox>
                    </div>
                    <div class="ordering__map ordering-left__item ordering-map">
                        <!-- TODO: блок с картой -->
                        <button class="ordering-map__show">Посмотреть на карте</button>
                        <CustomTextInput
                            :rows="3"
                            label="Адрес доставки"
                            placeholder="Город, улица, дом, квартира"
                        />
                        <CustomTextInput
                            label="Комментарий"
                            placeholder="Оставьте комментарий для доствки"
                        />
                    </div>
                </div>
                <Summary class="ordering__right" />
            </Wrapper>
            <template #fallback>
                <TwoColumnSectionPlaceholder>
                    <template #title>Оформление заказа</template>
                </TwoColumnSectionPlaceholder>
            </template>
        </ClientOnly>
    </section>
</template>

<script setup lang="ts">
import { definePageMeta, useHead } from '#imports'
import Summary from '~/components/Ordering/Summary.vue'
import CustomTextInput from '~/components/UIComponents/formElements/CustomTextInput.vue'
import CustomCheckbox from '~/components/UIComponents/formElements/CustomCheckbox.vue'
import TwoColumnSectionPlaceholder from '~/components/Placeholders/TwoColumnSectionPlaceholder.vue'
import Product from '~/components/Ordering/Product.vue'
useHead({
    title: 'Оформление заказа',
    meta: [
        {
            name: 'description',
            content: 'Оформление заказа',
        },
    ],
})
definePageMeta({
    layout: 'with-breadcrumbs',
    title: 'Оформление заказа',
})
</script>

<style lang="sass" scoped>
.ordering
    &__wrapper
        display: grid
        align-items: flex-start
        grid-template-columns: 1fr 1fr 1fr
        grid-gap: 40px 48px
        +until-tablet
            grid-template-columns: 1fr 1fr 240px
        +media-until(1023px)
            grid-template-columns: 100%
            grid-gap: 30px
        +media-until(767px)
            grid-template-columns: 100%
        +while-mob
            grid-gap: 24px

    &__info
        grid-column: -1/1

    &__left
        display: grid
        grid-gap: 16px
        grid-column: span 2
        +media-until(1023px)
            grid-column: unset
    &__products
        display: grid
        grid-gap: 16px

.ordering-info
    display: grid
    grid-gap: 24px
    margin-bottom: 16px
    +until-tablet
        grid-gap: 20px
        margin-bottom: 8px
    +while-mob
        grid-gap: 16px
        margin-bottom: 0
    &__title
        font-weight: 600
        font-size: 26px
        line-height: 30px
        +until-tablet
            font-size: 24px
            line-height: 24px
        +while-mob
            font-size: 20px

    &__notion
        font-size: 16px
        display: flex
        align-items: flex-start
        color: $color_onsurface_secondary
        +until-tablet
            font-size: 14px
        +while-mob
            font-size: 12px

.ordering-info-notion
    &__icon
        flex-shrink: 0
        color: $color_onsurface_tetriary
        width: 20px
        height: 20px
        margin-top: 2px
        margin-right: 14px

.ordering-customer-info
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 27px 32px
    +while-mob
        grid-template-columns: 100%
        padding: 24px 8px
        grid-gap: 16px
    &__checkbox
        grid-column: -1/1

.ordering-left__item
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05)
    border-radius: 8px
    padding: 24px
    +until-tablet
        padding: 16px
    +while-mob
        padding: 16px 8px

.ordering-map
    display: grid
    grid-gap: 32px
    justify-items: flex-start
    &__show
        font-size: 16px
        color: $color_primary
</style>
