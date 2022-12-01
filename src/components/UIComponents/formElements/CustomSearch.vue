<template>
    <div class="search">
        <div v-if="label" class="search__label" :class="{ 'search__label--disabled': disabled }">
            {{ label }}
        </div>
        <div class="search__input search-input">
            <input
                v-model="inputValue"
                class="search-input__element"
                :required="required"
                :placeholder="placeholder"
                :disabled="disabled"
                type="search"
            />
            <Icon class="search-input__icon" name="ri:search-line" />
        </div>
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
})

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
.search
    display: flex
    flex-direction: column
    width: 100%
    +no-select
    &__label
        color: $color_onsurface_primary
        font-size: 14px
        line-height: 20px
        margin-bottom: 8px
        transition: color .3s

        &--disabled
            color: $color_onsurface_tetriary

    &__input
        width: 100%
        display: flex
        align-items: center
        position: relative

.search-input
    &__icon
        position: absolute
        top: 50%
        transform: translateY(-50%)
        right: 16px
        width: 24px
        height: 24px
        color: $color_onsurface_tetriary

    &__element
        width: 100%
        padding: 0 45px 0 16px
        height: 40px
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
</style>
