<template>
    <div class="footer-socials">
        <CustomIcon
            v-for="link in links"
            :key="link.id"
            class="footer-socials__link footer-socials-link"
            :href="link.url"
            :title="link.title"
            :icon-name="link.icon"
            :icon-type="IconType.LINK"
            target="_blank"
        />
    </div>
</template>

<script setup lang="ts">
import CustomIcon from '~/components/UIComponents/CustomIcon.vue'
import { IconType } from '~/model/enums/IconType'

defineProps({
    links: {
        type: Array,
        default: () => [],
    },
})
</script>

<style lang="sass" scoped>
.footer-socials
    display: grid
    grid-gap: 16px
    justify-self: center
    align-self: center

.footer-socials-link
    width: 24px
    height: 24px
    transition: opacity .3s

    &:not(.router-link-active):hover
        opacity: .7
</style>
