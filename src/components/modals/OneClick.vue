<template>
    <ModalsModalRoot>
        <div class="modal-one-click">
            <div class="modal-one-click__head modal-one-click-head">
                <h3 class="modal-one-click-head__title">Купить в 1 клик</h3>
                <div class="modal-one-click-head__description">
                    Для быстрого оформления заказа оставьте только номер телефона, остальное уточнит менеджер
                </div>
            </div>
            <form class="modal-one-click__form modal-one-click-form" @submit.prevent>
                <CustomTextInput
                    mask="+7 (###) ###-####"
                    :required="true"
                    label="Номер телефона"
                    placeholder="+7 (___) ___-____"
                />
                <CustomCheckbox class="modal-one-click-form__checkbox" :required="true">
                    Я согласен с
                    <a target="_blank" href="#">условиями передачи информации</a>
                </CustomCheckbox>
                <CustomButton class="modal-one-click-form__submit" type="submit"> Оформить </CustomButton>
            </form>
        </div>
    </ModalsModalRoot>
</template>

<script setup lang="ts">
import CustomCheckbox from '~/components/UIComponents/formElements/CustomCheckbox'
import CustomButton from '~/components/UIComponents/formElements/CustomButton.vue'
import CustomTextInput from '~/components/UIComponents/formElements/CustomTextInput.vue'
</script>

<style lang="sass" scoped>
.modal-one-click
    display: grid
    grid-gap: 32px
.modal-one-click-head
    display: grid
    grid-gap: 16px
    &__title
        +h2
    &__description
        color: $color_onsurface_secondary

.modal-one-click-form
    display: grid
    grid-gap: 16px

    &__submit
        margin-top: 16px
</style>
