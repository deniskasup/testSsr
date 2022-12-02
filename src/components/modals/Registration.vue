<template>
    <ModalsModalRoot>
        <div class="modal-registration">
            <div class="modal-registration__head modal-registration-head">
                <h2 class="modal-registration-head__title">
                    Войти или создать <br />
                    профиль
                </h2>
                <div class="modal-registration-head__description">
                    Авторизуйтесь, чтобы мы могли сохранить для вас список пожеланий и заказы.
                </div>
            </div>
            <form class="modal-registration__form modal-registration-form" @submit.prevent>
                <template v-if="codeSended">
                    <CustomCodeInput v-model="smsCode" label="Код подтверждения" />
                    <CustomButton loading class="modal-registration-form__submit" type="button">
                        Отправить
                    </CustomButton>
                </template>
                <template v-else>
                    <CustomTextInput
                        mask="+7 (###) ###-####"
                        :required="true"
                        label="Номер телефона"
                        placeholder="+7 (___) ___-____"
                    />
                    <CustomCheckbox class="modal-registration-form__checkbox" :required="true">
                        Я согласен с
                        <a target="_blank" href="#">условиями передачи информации</a>
                    </CustomCheckbox>
                    <CustomButton
                        class="modal-registration-form__submit"
                        type="submit"
                        @click.prevent="test"
                    >
                        Получить код
                    </CustomButton>
                </template>
            </form>
        </div>
    </ModalsModalRoot>
</template>

<script setup lang="ts">
import CustomTextInput from '~/components/UIComponents/formElements/CustomTextInput.vue'
import CustomCheckbox from '~/components/UIComponents/formElements/CustomCheckbox.vue'
import CustomButton from '~/components/UIComponents/formElements/CustomButton.vue'
import CustomCodeInput from '~/components/UIComponents/formElements/CustomCodeInput.vue'
import { ref } from '#imports'
const codeSended = ref(false)
const smsCode = ref([])
const test = () => (codeSended.value = true)
</script>

<style lang="sass" scoped>
.modal-registration
    display: grid
    grid-gap: 32px

.modal-registration-head
    display: grid
    grid-gap: 16px

    &__title
        +h2

    &__decription
        color: $color_onsurface_secondary

.modal-registration-form
    display: grid
    grid-gap: 16px
    &__submit
        margin-top: 16px
</style>
