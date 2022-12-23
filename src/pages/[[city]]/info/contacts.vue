<template>
    <div>Контакты</div>
</template>

<script setup lang="ts">
import { definePageMeta, useHead } from '#imports'

definePageMeta({
    title: 'Контакты',
})
useHead({
    title: 'Контакты',
    meta: [
        {
            name: 'description',
            content: 'Контакты',
        },
    ],
})
</script>

<style lang="sass" scoped></style>
