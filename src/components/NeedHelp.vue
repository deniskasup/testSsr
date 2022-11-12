<template>
    <section class="need-help">
        <div class="need-help__left">
            <Wrapper class="need-help__wrapper">
                <div class="need-help__content need-help-content">
                    <div class="need-help-content__title">Нужна помощь?</div>
                    <div class="need-help-content__text">
                        Оставьте свои данные и мы с вами свяжемся в течении 15 минут
                    </div>
                    <form class="need-help-content__form need-help-content-form">
                        <CustomTextInput :required="true" label="Имя" />
                        <CustomTextInput
                            mask="+7 (###) ###-####"
                            :required="true"
                            label="Номер телефона"
                            placeholder="+7 (___) ___-____"
                        />
                        <CustomCheckbox class="need-help-content-form__checkbox" :required="true">
                            Я согласен с
                            <a target="_blank" href="#">условиями передачи информации</a>
                        </CustomCheckbox>
                        <CustomButton type="submit" @click.prevent="submit">
                            Перезвоните мне
                        </CustomButton>
                    </form>
                </div>
            </Wrapper>
        </div>
        <div class="need-help__right">
            <div class="need-help-video">
                <nuxt-img
                    format="webp"
                    class="need-help-video__image"
                    src="assets/images/need-help-background.png"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Wrapper from '~/components/Wrapper.vue'
import CustomTextInput from '~/components/UIComponents/formElements/CustomTextInput.vue'
import CustomButton from '~/components/UIComponents/formElements/CustomButton.vue'
import CustomCheckbox from '~/components/UIComponents/formElements/CustomCheckbox.vue'

const submit = () => console.log('test')
</script>

<style lang="sass" scoped>
.need-help
    position: relative
    display: grid
    grid-template-columns: 50% 50%
    +media-until(1023px)
        grid-template-columns: 100%

    &__wrapper
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        display: grid
        grid-template-columns: 1fr 1fr
        grid-gap: 50px
        +media-until(1023px)
            top: unset
            left: unset
            position: static
            transform: none
            grid-template-columns: 100%

    &__left
        background-color: $color_onsurface_quaternary
        +media-until(1023px)
            order: 2
            padding: 32px 0

.need-help-video
    z-index: 2
    overflow: hidden
    position: relative
    width: 100%
    padding-top: 85%
    +media-until(1023px)
        padding-top: 62.5%

    &:hover
        & .need-help-video__image
            transform: scale(1.01)

    &__image
        transition: transform .5s
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        object-fit: cover
        object-position: center

.need-help-content
    max-width: 400px
    width: 100%
    display: flex
    flex-direction: column
    +media-until(1023px)
        margin: 0 auto
    +while-mob
        max-width: unset
    &__title
        font-weight: 700
        font-size: 26px
        line-height: 30px
        margin-bottom: 14px
        +media-until(1250px)
            margin-bottom: 10px
            font-size: 22px
            line-height: 1.25
        +media-until(1023px)
            font-size: 20px
        +while-mob
            font-size: 14px

    &__text
        margin-bottom: 55px
        font-size: 16px
        +media-until(1250px)
            font-size: 14px
            margin-bottom: 15px
        +media-until(1023px)
            margin-bottom: 30px
        +while-mob
            font-size: 12px
    &__form
        display: grid
        grid-gap: 16px

.need-help-content-form__checkbox
    margin-bottom: 30px
    +media-until(1250px)
        margin-bottom: 15px
    +media-until(1023px)
        margin-bottom: 30px
    & a
        color: $color_primary
        &:hover
            text-decoration: underline
</style>
