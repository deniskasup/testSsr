<template>
    <div>Карта сайта</div>
</template>

<script setup lang="ts">
import { definePageMeta, useHead } from '#imports'

definePageMeta({
    title: 'Карта сайта',
})
useHead({
    title: 'Карта сайта',
    meta: [
        {
            name: 'description',
            content: 'Карта сайта',
        },
    ],
})
</script>

<style lang="sass" scoped></style>
