<template>
    <div class="main-layout flex min-h-screen flex-col">
        <TheHeader />
        <div class="grow">
            <slot />
        </div>
        <TheFooter />
        <ScrollTop />
    </div>
</template>
<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import ScrollTop from '~/components/ScrollTop.vue'
</script>

<style lang="sass"></style>
