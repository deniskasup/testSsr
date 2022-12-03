<template>
    <main class="default-page personal-page">
        <ClientOnly>
            <Section />
            <template #fallback>
                <TwoColumnSectionPlaceholder>
                    <template #title>Личный кабинет</template>
                </TwoColumnSectionPlaceholder>
            </template>
        </ClientOnly>
        <NeedHelp />
    </main>
</template>

<script setup lang="ts">
import { definePageMeta, useHead } from '#imports'
import Section from '~/components/Personal/Section.vue'
import TwoColumnSectionPlaceholder from '~/components/Placeholders/TwoColumnSectionPlaceholder.vue'
definePageMeta({
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
