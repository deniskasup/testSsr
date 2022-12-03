<template>
    <ModalsModalRoot>
        <div class="modal-notion">
            <div class="modal-notion__smile">{{ smile }}</div>
            <div class="modal-notion__title">{{ title }}</div>
            <div class="modal-notion__text">{{ text }}</div>
        </div>
    </ModalsModalRoot>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: '',
    },
    text: {
        type: String,
        default: '',
    },
    smile: {
        type: String,
        default: '',
    },
})
</script>

<style lang="sass" scoped>
.modal-notion
    padding-top: 32px
    display: flex
    flex-direction: column
    align-items: center

    &__smile
        font-size: 56px
        line-height: 1
        margin-bottom: 16px
        font-weight: 600

    &__title
        font-size: 16px
        font-weight: 600
        margin-bottom: 4px

    &__text
        text-align: center
        color: $color_onsurface_secondary
</style>
