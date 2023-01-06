<template>
    <div class="stars" :class="{ 'stars--disabled': disabled }">
        <div v-if="label" class="stars__label">{{ label }}{{ required ? '*' : '' }}</div>
        <div class="stars__list stars-list" :class="`stars-list--${size}`">
            <label v-for="star in 5" :key="`stars-list-item-${star}`" class="stars-list__item stars-list-item">
                <input
                    v-model="inputValue"
                    class="stars-list-item__input"
                    :disabled="disabled"
                    :required="required"
                    :value="star"
                    type="radio"
                    name="stars"
                />
                <Icon
                    class="stars-list-item__icon"
                    :class="{ 'stars-list-item__icon--active': isStarActive(star) }"
                    name="ri:star-s-fill"
                />
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { computed } from '#imports'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    modelValue: { type: Number, default: null },
    size: { type: String as PropType<'s' | 'm' | 'l'>, default: 'm' },
})

const isStarActive = (star: number) => inputValue.value >= star

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
.stars
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
        & .stars-list-item
            cursor: auto
        & .stars__label
            color: $color_onsurface_tetriary

.stars-list
    margin-left: -3px
    display: grid
    grid-template-columns: repeat(5, 1fr)
    justify-self: flex-start
    &--s
        .stars-list-item
            &__icon
                width: 14px
                height: 14px
    &--m
        .stars-list-item
            &__icon
                width: 28px
                height: 28px

.stars-list-item
    cursor: pointer
    position: relative
    &__input
        position: absolute
        width: 1px
        height: 1px
        opacity: 0
        bottom: 0
        left: 50%
    &__icon
        color: $color_onsurface_tetriary
        &--active
            color: $color_surface_dangerous !important
</style>
