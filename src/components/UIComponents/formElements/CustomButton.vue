<template>
    <button :type="type" class="button" :class="buttonClasses">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { ButtonPriority } from '~/model/enums/formElements/ButtonPriority'
import { Size } from '~/model/enums/formElements/Size'
import { computed } from '#imports'

const props = defineProps({
    type: {
        type: String,
        default: 'button',
    },
    priority: {
        type: String as PropType<ButtonPriority>,
        default: ButtonPriority.PRIMARY,
    },
    size: {
        type: String as PropType<Size>,
        default: Size.MEDIUM,
    },
})

const buttonClasses = computed(() => [
    `button--priority-${props.priority}`,
    `button--size-${props.size}`,
])
</script>

<style lang="sass" scoped>
.button
    display: flex
    align-items: center
    justify-content: center
    font-weight: 500
    font-size: 16px
    line-height: 20px
    border-radius: 5px
    transition: opacity .3s, box-shadow .3s, border-color .3s
    +no-select
    &--size
        &-s
            padding: 10px 30px
            +while-mob
                padding: 10px 15px

        &-m
            padding: 14px 40px

    &--priority
        &-primary
            background-color: $color_primary
            color: $color_surface_primary

            &:disabled
                background-color: $color_onsurface_tetriary

        &-secondary
            background-color: transparent
            color: $color_primary
            outline: 1px solid $color_primary

            &:disabled
                outline-color: $color_onsurface_tetriary
                color: $color_onsurface_tetriary

    &:hover:not(:disabled)
        opacity: .7

    &:active
        opacity: 1 !important
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.25)
</style>
