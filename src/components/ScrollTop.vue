<template>
    <button
        type="button"
        class="scroll-top"
        :class="{ 'scroll-top--visible': isButtonVisible }"
        @click="scrollToTop"
    >
        <Icon class="scroll-top__icon" name="ri:arrow-down-line" />
    </button>
</template>

<script setup lang="ts">
import { computed, useWindowScroll } from '#imports'

const { y } = useWindowScroll()

const isButtonVisible = computed(() => y.value && y.value > 100)
const scrollToTop = () => {
    window?.scroll({
        top: 0,
        behavior: 'smooth',
    })
}
</script>

<style lang="sass" scoped>
.scroll-top
    position: fixed
    right: 28px
    bottom: 28px
    background-color: $color_primary
    width: 64px
    height: 64px
    border-radius: 50%
    z-index: 5
    opacity: 0
    visibility: hidden
    &--visible
        animation: buttonAnimation .5s forwards
        animation-timing-function: cubic-bezier(.57,1.15,.62,.51) //cubic-bezier(.21,1.19,.37,.33)
    &__icon
        width: 32px
        height: 32px
        color: $color_surface_primary
        transform: rotate(180deg)

@keyframes buttonAnimation
    from
        opacity: 0
        transform: translateY(100px)
    to
        opacity: 1
        visibility: visible
        transform: translateY(0)
</style>
