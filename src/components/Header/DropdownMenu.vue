<template>
    <div class="dropdown-menu">
        <Wrapper class="dropdown-menu__wrapper"></Wrapper>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.dropdown-menu
    position: absolute
    top: 100%
    left: 0
    width: 100%
    padding: 56px 0
    background-color: $color_surface_primary
    box-shadow: 0 1px 0 $color_onsurface_quaternary
    z-index: 2
</style>
