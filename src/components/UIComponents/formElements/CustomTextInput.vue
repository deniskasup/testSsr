<template>
    <div class="text-input">
        <div
            v-if="label"
            class="text-input__label"
            :class="{ 'text-input__label--disabled': disabled }"
        >
            {{ label }}
        </div>
        <div class="text-input__input">
            <input
                v-if="mask"
                v-model="inputValue"
                v-maska="mask"
                :required="required"
                :placeholder="placeholder"
                :disabled="disabled"
                type="text"
            />
            <input
                v-else
                v-model="inputValue"
                :required="required"
                :placeholder="placeholder"
                :disabled="disabled"
                type="text"
            />
        </div>
        <div v-if="error" class="text-input__error">{{ error }}</div>
    </div>
</template>

<script setup lang="ts">
import { computed } from '#imports'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    modelValue: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    mask: { type: String, default: '' },
})

const inputValue = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    },
})

const error = ''
</script>

<style lang="sass" scoped>
.text-input
    width: 100%
    display: grid
    grid-gap: 8px

    &__label
        color: $color_onsurface_primary
        font-size: 14px
        line-height: 20px
        transition: color .3s

        &--disabled
            color: $color_onsurface_tetriary

    &__input
        display: flex
        align-items: center
        position: relative

        & input
            width: 100%
            padding: 16px
            font-size: 16px
            line-height: 24px
            outline: 1px solid $color_onsurface_tetriary
            transition: outline-color .3s, color .3s
            caret-color: $color_primary
            border-radius: 5px
            color: $color_onsurface_primary

            &::placeholder
                color: $color_onsurface_tetriary

            &:focus
                outline-color: $color_onsurface_primary

            &:disabled
                background-color: $color_surface_primary
                color: $color_onsurface_tetriary

            //&:invalid
            //    color: $color_primary
            //    outline-color: $color_primary

    &__error
        font-size: 12px
        line-height: 16px
        color: $color_primary
</style>
