<template>
    <main class="catalog-page default-page">
        <NuxtPage />
    </main>
</template>

<script setup lang="ts">
import { definePageMeta, useHead } from '#imports'
definePageMeta({
    title: 'Каталог',
    showSubMenu: true,
})
useHead({
    title: 'Каталог',
    meta: [
        {
            name: 'description',
            content: 'Каталог',
        },
    ],
})
</script>
<style lang="sass" scoped></style>
