<template>
    <main class="catalog-page default-page">
        <section class="catalog">
            <Wrapper> каталог </Wrapper>
        </section>
    </main>
</template>

<script setup lang="ts">
import Wrapper from '~/components/Wrapper.vue'
import { definePageMeta } from '#imports'
definePageMeta({
    layout: 'with-breadcrumbs',
    title: 'Каталог',
})
</script>
<style lang="sass" scoped></style>
