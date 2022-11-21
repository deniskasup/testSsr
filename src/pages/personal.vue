<template>
    <main class="default-page personal-page">
        <ClientOnly>
            <PersonalSection />
            <template #fallback>
                <PersonalSectionPlaceholder />
            </template>
        </ClientOnly>
        <NeedHelp />
    </main>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'
import PersonalSection from '~/components/Personal/PersonalSection.vue'
definePageMeta({
    layout: 'with-breadcrumbs',
    title: 'Личный кабинет',
})
</script>
