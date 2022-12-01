<template>
    <VueFinalModal
        v-slot="{ close }"
        v-bind="$attrs"
        classes="modal-container"
        content-class="modal-content"
    >
        <button
            v-if="closeButtonVisible"
            title="Закрыть"
            type="button"
            class="modal__close"
            @click="close"
        >
            <Icon name="ri:close-fill" size="20" />
        </button>
        <div class="modal__content">
            <slot />
        </div>
    </VueFinalModal>
</template>

<script setup lang="ts">
defineProps({
    closeButtonVisible: {
        type: Boolean,
        default: true,
    },
})
</script>

<style lang="sass" scoped>
.modal
    &__close
        position: absolute
        top: 32px
        right: 32px
        color: $color_onsurface_primary
        transition: color .3s
        +while-mob
            top: 16px
            right: 16px
        &:hover
            color: $color_onsurface_tetriary
</style>
