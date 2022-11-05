<template>
    <main class="main-page">
        <MainSlider />
    </main>
</template>

<script setup lang="ts">
import MainSlider from '~/components/MainSlider.vue'
</script>
<style lang="sass" scoped>
.main-page
    width: 100%
    //max-width: 1440px
    margin: 0 auto
    display: grid
    grid-gap: 100px
    & > *
        width: 100vw
</style>
