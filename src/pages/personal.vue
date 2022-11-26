<template>
    <main class="default-page personal-page">
        <ClientOnly>
            <Section />
            <template #fallback>
                <SectionPlaceholder />
            </template>
        </ClientOnly>
        <NeedHelp />
    </main>
</template>

<script setup lang="ts">
import { definePageMeta, useHead } from '#imports'
import Section from '~/components/Personal/Section.vue'
import SectionPlaceholder from '~/components/Personal/SectionPlaceholder.vue'
definePageMeta({
    layout: 'with-breadcrumbs',
    title: 'Личный кабинет',
})

useHead({
    title: 'Личный кабинет',
    meta: [
        {
            name: 'description',
            content: 'Личный кабинет',
        },
    ],
})
</script>
