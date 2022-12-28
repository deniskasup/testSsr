<template>
    <div class="info-menu">
        <Wrapper class="info-menu__wrapper">
            <NuxtLink
                v-for="link in infoLinks"
                :key="`info-menu-link-${link.id}`"
                class="info-menu__link info-menu-link"
                :to="linkWithCity(link.to)"
                @click="hideMenu"
            >
                {{ link.name }}
            </NuxtLink>
        </Wrapper>
    </div>
</template>

<script setup lang="ts">
import linkWithCity from '~/helpers/linkWithCity'
import { infoLinks } from '~/constants/infoLinks'
const emit = defineEmits(['hide'])

const hideMenu = () => {
    emit('hide', '')
}
</script>

<style lang="sass" scoped>
.info-menu
    position: absolute
    top: 100%
    left: 0
    width: 100%
    padding: 56px 0
    background-color: $color_surface_primary
    box-shadow: 0 5px 0 $color_onsurface_quaternary
    z-index: 2
    &__wrapper
        max-height: 184px
        display: flex
        flex-direction: column
        flex-wrap: wrap
    &__link
        flex: 1 1 46px
        align-self: flex-start
        position: relative
        font-weight: 500
        font-size: 18px
        white-space: nowrap
        transition: color .3s
        +no-select
        &.router-link-active
            color: $color_primary

        &:not(.router-link-active):hover
            color: $color_onsurface_tetriary
</style>
