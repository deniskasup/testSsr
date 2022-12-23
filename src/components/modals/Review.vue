<template>
    <ModalsModalRoot>
        <div class="modal-review">
            <div class="modal-review__head modal-review-head">
                <h2 class="modal-review-head__title">Мой отзыв</h2>
                <div class="modal-review-head__description">{{ productName }}</div>
            </div>
            <form ref="form" class="modal-review__form modal-review-form" @submit.prevent>
                <CustomStars v-model="uploadedImages" required label="Оценка" />
                <CustomTextInput required placeholder="Заказ, в котором покупали товар" label="Номер заказа" />
                <CustomTextInput required placeholder="Как вас зовут" label="Имя" />
                <CustomTextArea required placeholder="Как можно подробнее опишите товар" label="Как вам товар?" />
                <CustomFileInput v-model="files" />
                <CustomButton :loading="loading" class="modal-review-form__submit" type="submit" @click="submitReview">
                    Поделиться
                </CustomButton>
            </form>
        </div>
    </ModalsModalRoot>
</template>

<script setup lang="ts">
import { Ref } from '@vue/runtime-core'
import { ref, unref } from '#imports'
import CustomTextInput from '~/components/UIComponents/formElements/CustomTextInput.vue'
import CustomButton from '~/components/UIComponents/formElements/CustomButton.vue'
import CustomFileInput from '~/components/UIComponents/formElements/CustomFileInput.vue'
import CustomTextArea from '~/components/UIComponents/formElements/CustomTextArea.vue'
import CustomStars from '~/components/UIComponents/formElements/CustomStars.vue'

defineProps({
    productName: {
        type: String,
        default: '',
    },
})
const uploadedImages: Ref<File[]> = ref([])

const loading = ref(false)
const form: Ref<HTMLFormElement | undefined> = ref()

const files = ref([])

const submitReview = () => {
    loading.value = true
    if (unref(form)?.checkValidity()) {
        console.log('test')
    } else {
        unref(form)?.reportValidity()
    }
    loading.value = false
}
</script>

<style lang="sass" scoped>
.modal-review
    display: grid
    grid-gap: 32px

.modal-review-head
    display: grid
    grid-gap: 16px

    &__title
        +h2

    &__decription
        color: $color_onsurface_secondary

.modal-review-form
    display: grid
    grid-gap: 16px

    &__submit
        margin-top: 16px
</style>
