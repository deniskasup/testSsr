<template>
    <label class="checkbox" :class="checkboxClasses">
        <span class="checkbox__icon checkbox-icon">
            <input
                :id="id"
                v-model="inputValue"
                class="checkbox-icon__input"
                :disabled="disabled"
                :required="required"
                type="checkbox"
            />
            <span class="checkbox-icon__element"></span>
        </span>
        <span class="checkbox__text">
            <slot />
        </span>
    </label>
</template>

<script setup lang="ts">
import { computed } from '#imports'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    id: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: false },
})

const checkboxClasses = computed(() => ({
    'checkbox--disabled': props.disabled,
}))

const inputValue = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    },
})
</script>

<style lang="sass" scoped>
.checkbox
    display: flex
    align-items: center
    user-select: none
    -webkit-tap-highlight-color: $color_transparent

    &:not(&--disabled)
        cursor: pointer

    &__text
        font-weight: 400
        font-size: 12px
        line-height: 16px
        & :deep( > a)
            color: $color_primary
            &:hover
                text-decoration: underline
    &--disabled
        & .checkbox-icon__element
            outline-color: $color_onsurface_tetriary !important
            background-color: $color_onsurface_tetriary !important

.checkbox-icon
    display: flex
    align-items: center
    margin-right: 11px

    &__input
        width: 0
        height: 0

        &:checked
            & + .checkbox-icon__element
                outline-color: $color_primary
                background-color: $color_primary

                &::before
                    opacity: 1

    &__element
        position: relative
        width: 18px
        height: 18px
        outline: 2px solid $color_onsurface_tetriary
        border-radius: 1px
        transition: outline-color .3s, background-color .3s

        &::before
            content: ''
            opacity: 0
            transition: opacity .3s
            color: $color_surface_primary
            border-bottom: 2px solid
            border-left: 2px solid
            position: absolute
            height: 6px
            width: 11px
            top: 4px
            left: 4px
            transform: rotate(-45deg)
</style>
