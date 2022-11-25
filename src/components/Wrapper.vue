<template>
    <div class="wrapper mx-auto flex w-full">
        <slot></slot>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.wrapper
    max-width: 1232px
    padding: 0 16px
    +until-tablet
        padding: 0 60px
    +media-until(767px)
        padding: 0 16px
</style>
