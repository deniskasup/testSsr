<template>
    <div class="footer-socials">
        <a
            v-for="link in links"
            :key="link.id"
            class="footer-socials__link footer-socials-link"
            :href="link.url"
            :title="link.title"
        >
            <Icon class="footer-socials-link__icon" :name="link.icon" />
        </a>
    </div>
</template>

<script setup lang="ts">
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
    &__icon
        width: 24px
        height: 24px
</style>
