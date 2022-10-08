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
    placeholder: { type: String, default: '' },
    modelValue: { type: String, default: '' },
})

const inputValue = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    },
})

const error = 'error'
</script>

<style lang="sass" scoped>
.text-input
    display: flex
    flex-direction: column
    &__label
        color: $color_black
        font-size: 14px
        line-height: 20px
        margin-bottom: 8px
        transition: color .3s
        &--disabled
            color: $color_disabled
    &__input
        display: flex
        align-items: center
        position: relative
        & input
            padding: 16px
            font-size: 16px
            line-height: 24px
            outline: 1px solid $color_disabled
            transition: outline-color .3s, color .3s
            caret-color: $color_primary
            border-radius: 5px
            color: $color_black
            &::placeholder
                color: $color_disabled
            &:focus
                outline-color: $color_black
            &:disabled
                background-color: $color_white
                color: $color_disabled
            &:invalid
                color: $color_error
                outline-color: $color_error
    &__error
        font-size: 12px
        line-height: 16px
        margin-top: 4px
        color: $color_error
</style>
