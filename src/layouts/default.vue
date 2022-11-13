<template>
    <div class="main-layout flex min-h-screen flex-col">
        <TheHeader />
        <div class="grow">
            <slot />
        </div>
        <TheFooter />
    </div>
</template>
<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
</script>

<style lang="sass"></style>
