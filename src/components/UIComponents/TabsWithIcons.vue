<template>
    <div class="tabs-w-icons">
        <label
            v-for="tabElement in tabs"
            :key="tabElement.value"
            class="tabs-w-icons__item tabs-w-icons-item"
            :class="{ 'tabs-w-icons-item--active': tabElement.value === inputValue }"
        >
            <input
                v-model="inputValue"
                class="tabs-w-icons-item__input"
                :value="tabElement.value"
                type="radio"
                name="tab-element"
            />
            <Icon :name="tabElement.icon" class="tabs-w-icons-item__icon" />
            <span class="tabs-w-icons-item__text">{{ tabElement.name }}</span>
        </label>
    </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { TabWithIcon } from '~/model/interfaces/TabWithIcon'
import { computed } from '#imports'

const props = defineProps({
    modelValue: { type: String, default: '' },
    tabs: {
        type: Array as PropType<TabWithIcon[]>,
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
.tabs-w-icons
    display: flex
    align-items: center

.tabs-w-icons-item
    position: relative
    cursor: pointer
    display: flex
    align-items: center
    color: $color_primary
    transition: background-color .3s
    background-color: rgba(255, 255, 255, 0.2)
    border: 1px solid $color_primary
    padding: 11px
    &--active
        background-color: $color_primary
        color: $color_surface_primary
    &:not(:first-of-type)
        margin-left: -1px
    &:first-of-type
        border-top-left-radius: 5px
        border-bottom-left-radius: 5px
    &:last-of-type
        border-top-right-radius: 5px
        border-bottom-right-radius: 5px
    &__icon
        width: 24px
        height: 24px

        margin-right: 6px
    &__text
        font-size: 16px
        flex-shrink: 0
        white-space: nowrap
        transition: color .3s
    &__input
        position: absolute
        width: 0
        height: 0
        left: 0
        top: 50%
</style>
