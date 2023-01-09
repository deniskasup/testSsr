<template>
    <div class="tabs">
        <label v-for="tabElement in tabs" :key="tabElement.value" class="tabs__item tabs-item">
            <input
                v-model="inputValue"
                class="tabs-item__input"
                :value="tabElement.value"
                type="radio"
                name="tab-element"
            />
            <span class="tabs-item__text">{{ tabElement.name }}</span>
        </label>
    </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { computed } from '#imports'

type TabButton = {
    name: string
    value: string
}

const props = defineProps({
    modelValue: { type: String, default: '' },
    tabs: {
        type: Array as PropType<TabButton[]>,
        default: () => [],
    },
})

const emit = defineEmits(['update:modelValue'])

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
.tabs
    display: flex
    align-items: center
    &__item
        margin-right: 32px

.tabs-item
    position: relative
    cursor: pointer
    user-select: none
    &__text
        color: $color_onsurface_tetriary
        font-size: 18px
        font-weight: 500
        flex-shrink: 0
        white-space: nowrap
        transition: color .3s
    &__input
        position: absolute
        width: 0
        height: 0
        left: 0
        top: 50%
        &:checked
            & + .tabs-item__text
                color: $color_onsurface_primary
</style>
