<template>
    <main class="catalog-page default-page">
        <section class="catalog">
            <Wrapper> каталог </Wrapper>
        </section>
    </main>
</template>

<script setup lang="ts">
import Wrapper from '~/components/Wrapper.vue'
import { definePageMeta, useHead } from '#imports'
definePageMeta({
    layout: 'with-breadcrumbs',
    title: 'Каталог',
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
