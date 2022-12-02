<template>
    <div class="code-input">
        <div v-if="label" class="code-input__label">{{ label }}{{ required ? '*' : '' }}</div>
        <div class="code-input__symbols code-input-symbols">
            <div
                v-for="(input, index) in length"
                :key="`code-input-symbols__item-${index}`"
                class="code-input-symbols__item"
            >
                <input
                    ref="codeInputs"
                    v-model.trim="inputValue[index]"
                    :disabled="!!inputValue[index]"
                    pattern="\d [0-9]"
                    type="number"
                    @input.stop="focusNextInput(index)"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType, Ref } from '@vue/runtime-core'
import { computed, ref, unref } from '#imports'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    modelValue: { type: Array as PropType<number[]>, default: () => [] },
    length: { type: Number, default: 4 },
})
const codeInputs: Ref<HTMLInputElement[]> = ref([])

const inputValue = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    },
})

const focusNextInput = (currentIndex: number) => {
    if (unref(codeInputs)[currentIndex + 1]) {
        unref(codeInputs)[currentIndex + 1].focus()
    }
}
</script>

<style lang="sass" scoped>
.code-input
    width: 100%
    display: grid
    grid-gap: 8px
    +no-select
    &__label
        color: $color_onsurface_primary
        font-size: 14px
        line-height: 20px
        transition: color .3s

        &--disabled
            color: $color_onsurface_tetriary

.code-input-symbols
    display: grid
    grid-template-columns: repeat(6, 1fr)
    grid-gap: 12px
    &__item
        height: 56px
        overflow: hidden
        background: $color_surface_primary
        border: 1px solid $color_onsurface_tetriary
        border-radius: 5px
        & input
            font-size: 20px
            text-align: center
            width: 100%
            height: 100%
            border: none
            -moz-appearance: textfield
            +no-select
            &::-webkit-outer-spin-button, &::-webkit-inner-spin-button
                -webkit-appearance: none
                margin: 0
</style>
