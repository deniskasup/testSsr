<template>
    <main class="default-page info-page">
        <div class="info">
            <Wrapper class="info__wrapper">
                <nav class="info__sidemenu info-sidemenu">
                    <NuxtLink
                        v-for="link in infoLinks"
                        :key="`side-menu-link-${link.id}`"
                        class="info-sidemenu__link"
                        :to="linkWithCity(link.to)"
                    >
                        {{ link.name }}
                    </NuxtLink>
                </nav>
                <div class="info-sidemenu__content">
                    <NuxtPage />
                </div>
            </Wrapper>
        </div>
        <NeedHelp />
    </main>
</template>

<script setup lang="ts">
import Wrapper from '~/components/Wrapper.vue'
import NeedHelp from '~/components/NeedHelp.vue'
import { infoLinks } from '~/constants/infoLinks'
import { definePageMeta, useHead } from '#imports'
import linkWithCity from '~/helpers/linkWithCity'

definePageMeta({
    title: 'Инфо',
    redirect: { path: `/info/how-to-order` },
})
useHead({
    title: 'Инфо',
    meta: [
        {
            name: 'description',
            content: 'Инфо',
        },
    ],
})
</script>

<style lang="sass" scoped>
.info__wrapper
    display: grid
    grid-template-columns: 2fr 4fr
    grid-gap: 40px

.info-sidemenu
    align-self: flex-start
    display: grid
    justify-items: flex-start
    grid-gap: 24px
    &__link
        transition: color .3s
        &.router-link-active
            color: $color_primary

        &:not(.router-link-active):hover
            color: $color_onsurface_tetriary
</style>
