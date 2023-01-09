<template>
    <button class="favorite-button" @click="toogle">
        <Icon :name="iconName" class="favorite-button__icon" />
    </button>
</template>

<script setup lang="ts">
import { computed, ref } from '#imports'

const props = defineProps({
    isFavorite: {
        type: Boolean,
        default: false,
    },
})
const isFav = ref(props.isFavorite)
const iconName = computed(() => (isFav.value ? 'ri:heart-fill' : 'ri:heart-line'))

const toogle = () => {
    isFav.value = !isFav.value
}
</script>

<style lang="sass" scoped>
.favorite-button
    display: flex
    align-items: center
    justify-content: center
    font-weight: 500
    font-size: 16px
    line-height: 20px
    border-radius: 5px
    transition: opacity .3s, box-shadow .3s, border-color .3s
    -webkit-tap-highlight-color: transparent
    -webkit-touch-callout: none
    user-select: none
    background-color: transparent
    color: $color_primary
    outline: 1px solid $color_primary
    &:hover:not(:disabled)
        opacity: .7

    &:active
        opacity: 1 !important
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.25)
    &:focus, &:active
        outline: 1px solid $color_primary
    &:disabled
        outline-color: $color_onsurface_tetriary
        color: $color_onsurface_tetriary

    &__icon
        width: 24px
        height: 24px
</style>
