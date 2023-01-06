<template>
    <ModalsModalRoot>
        <div class="modal-need-help">
            <div class="modal-need-help__head modal-need-help-head">
                <h2 class="modal-need-help-head__title">Нужна помощь?</h2>
                <div class="modal-need-help-head__description">
                    Оставьте свои данные и мы с вами свяжемся в течении 15 минут
                </div>
            </div>

            <form class="modal-need-help__form modal-need-help-form">
                <CustomTextInput :required="true" label="Имя" />
                <CustomTextInput
                    mask="+7 (###) ###-####"
                    :required="true"
                    label="Номер телефона"
                    placeholder="+7 (___) ___-____"
                />
                <CustomCheckbox class="modal-need-help-form__checkbox" :required="true">
                    Я согласен с
                    <a target="_blank" href="#">условиями передачи информации</a>
                </CustomCheckbox>
                <CustomButton class="modal-need-help-form__submit" type="submit" @click.prevent="">
                    Перезвоните мне
                </CustomButton>
            </form>

            <div class="modal-need-help__footer modal-need-help-footer">
                <div class="modal-need-help-footer__text">
                    Также можете позвонить или написать нам ежедневно 9:00 – 21:00
                </div>
                <a href="tel:88009999999" class="modal-need-help-footer__phone modal-need-help-footer-phone">
                    <Icon class="modal-need-help-footer-phone__icon" name="ri:whatsapp-fill" />
                    <span class="modal-need-help-footer-phone__text"> 8 800 999 99 99 </span>
                </a>
            </div>
        </div>
    </ModalsModalRoot>
</template>

<script setup lang="ts">
import CustomTextInput from '../UIComponents/formElements/CustomTextInput'
import CustomCheckbox from '../UIComponents/formElements/CustomCheckbox'
import CustomButton from '../UIComponents/formElements/CustomButton'
</script>

<style lang="sass" scoped>
.modal-need-help
    display: grid
    grid-gap: 32px

.modal-need-help-head
    display: grid
    grid-gap: 16px
    &__title
        +h2
    &__description
        color: $color_onsurface_secondary


.modal-need-help-form
    display: grid
    grid-gap: 16px
    &__submit
        margin-top: 16px

.modal-need-help-footer
    display: grid
    grid-gap: 12px
    &__text
        color: $color_onsurface_secondary
.modal-need-help-footer-phone
    display: flex
    align-items: center
    color: $color_onsurface_primary
    &__icon
        width: 22px
        height: 22px
        margin-right: 26px
    &__text
        font-weight: 600
        font-size: 20px
</style>
