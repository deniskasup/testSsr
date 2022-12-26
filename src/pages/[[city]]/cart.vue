<template>
    <main class="default-page cart-page">
        <NuxtPage />
        <NeedHelp />
    </main>
</template>

<script setup lang="ts">
import { definePageMeta, useHead } from '#imports'
definePageMeta({
    title: 'Корзина',
})
useHead({
    title: 'Корзина',
    meta: [
        {
            name: 'description',
            content: 'Корзина',
        },
    ],
})
</script>

<style lang="sass"></style>
