<template>
    <button type="button" class="need-help-button" @click="showNeedHelp">
        <div class="need-help-button__inner need-help-button-inner">
            <svg
                class="need-help-button-inner__text"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 64 64"
            >
                <defs>
                    <!-- The text path: see links above regarding coordinate system -->
                    <!--                <circle id="txt-path" cx="32" cy="32" r="32" stroke="black" stroke-width="3" />-->

                    <path id="txt-path" d="M0,32a32,32 0 1,0 64,0a32,32 0 1,0 -64,0"></path>
                </defs>

                <text
                    fill="#C8342F"
                    font-size="6"
                    letter-spacing="2px"
                    font-family="Lato, sans-serif"
                    font-weight="600"
                >
                    <textPath startOffset="0" xlink:href="#txt-path">
                        ПОМОЩЬ   ПОМОЩЬ   ПОМОЩЬ   ПОМОЩЬ  
                    </textPath>
                </text>
            </svg>
            <div class="need-help-button-inner__smile">👋</div>
        </div>
    </button>
</template>

<script setup lang="ts">
import useModals from '~/composition/useModals'

const { showNeedHelp } = useModals()
</script>

<style lang="sass" scoped>
.need-help-button
    position: fixed
    right: 28px
    bottom: 110px
    background-color: $color_surface_primary
    width: 64px
    height: 64px
    border-radius: 50%
    z-index: 5
    padding: 2px
    &__inner
        border: 1px solid $color_primary
        border-radius: 50%
        padding: 2px

.need-help-button-inner
    position: relative
    &__text
        animation: rotating 10s linear infinite
        width: 100%
        height: 100%
    &__smile
        font-size: 20px
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)

@keyframes rotating
    from
        transform: rotate(0deg)

    to
        transform: rotate(360deg)
</style>
