<template>
    <div class="file-input" :class="{ 'file-input--reverse': imagesPreview.length }">
        <div v-if="imagesPreview.length" class="file-input__list file-input-list">
            <div
                v-for="(image, index) in imagesPreview"
                :key="`file-input-list-item-${index}`"
                class="file-input-list__item file-input-list-item"
                @click="removeImage(index)"
            >
                <img :src="image" alt="загруженное фото" />
            </div>
        </div>
        <label class="file-input__button">
            <input
                ref="filesInput"
                :required="required"
                :disabled="disabled"
                accept="image/*"
                type="file"
                multiple
                @change="setFileList"
            />
        </label>
        <div v-if="!imagesPreview.length" class="file-input__info file-input-info">
            <div class="file-input-info__text">Фото товара важны для других покупателей</div>
            <div class="file-input-info__notion">Не более 5 штук и 10 МБ</div>
        </div>
        <div v-if="error" class="file-input__error">
            {{ error }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType, Ref } from '@vue/runtime-core'
import { computed, ref, unref } from '#imports'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    modelValue: { type: Array as PropType<File[]>, default: () => [] },
})
const error = ref('')
const filesInput: Ref<HTMLInputElement | undefined> = ref()
const fileList = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    },
})
const imagesPreview = computed(() => {
    return Array.from(unref(fileList)).map((file) => URL.createObjectURL(file))
})

const clearError = () => (error.value = '')

const removeImage = (index: number) => {
    fileList.value = Array.from(unref(fileList)).filter((file, fileIndex) => fileIndex !== index)
}

const setFileList = () => {
    clearError()
    if (!unref(filesInput)?.files?.length) return
    const filesArray = Array.from(unref(filesInput)!.files!)

    if (filesArray.length > 5) {
        error.value = 'Можно загрузить не более 5 штук'
        setTimeout(() => (error.value = ''), 3000)
    }

    const sizeInBytes = filesArray.reduce((acc, file) => acc + file.size, 0)
    const sizeInMBytes = (sizeInBytes / 1024 / 1024).toFixed(4)

    if (+sizeInMBytes > 10) {
        error.value = 'Изображения превышают допустимый вес'
        return
    }

    fileList.value = filesArray.slice(0, 5)
}
</script>

<style lang="sass" scoped>
.file-input
    grid-gap: 4px 16px
    display: grid
    align-items: center
    grid-template-columns: 48px 1fr
    grid-auto-flow: dense

    &--reverse
        grid-template-columns: 1fr 48px

    &__error
        grid-column: -1/1
        font-size: 10px
        color: $color_primary

    &__button
        cursor: pointer
        position: relative
        width: 48px
        height: 48px
        border: 1px solid $color_primary
        border-radius: 5px

        &::before, &::after
            content: ''
            width: 14px
            height: 2px
            background-color: $color_primary
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)

        &::after
            transform: translate(-50%, -50%) rotate(90deg)

        & input
            opacity: 0
            width: 1px
            height: 1px
            position: absolute
            bottom: 0
            left: 50%

.file-input-info
    display: grid
    grid-gap: 8px

    &__text
        line-height: 1.2
        font-size: 12px

    &__notion
        line-height: 1.2
        font-size: 10px
        color: $color_onsurface_secondary

.file-input-list
    display: flex
    align-items: center

    &__item
        &:not(:last-of-type)
            margin-right: 8px
            +media-until(380px)
                margin-right: 4px

.file-input-list-item
    position: relative
    width: 44px
    height: 44px
    box-shadow: 0 0 1px $color_onsurface_tetriary
    cursor: pointer
    +media-until(380px)
        width: 32px
        height: 32px

    &::after, &::before
        content: ''
        width: 50%
        height: 2px
        position: absolute
        z-index: 2
        top: 50%
        left: 50%
        transform: translate(-50%, -50%) rotate(45deg)
        opacity: 0
        background-color: $color_surface_primary
        transition: opacity .3s

    &::before
        transform: translate(-50%, -50%) rotate(-45deg)


    &:hover
        & img
            filter: brightness(.5)

        &::before, &::after
            opacity: 1

    & img
        transition: filter .3s
        width: 100%
        height: 100%
        object-fit: cover
</style>
