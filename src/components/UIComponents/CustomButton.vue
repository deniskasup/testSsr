<template>
    <button type="button" :class="`button button-${type}`">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { ButtonType } from '~/model/enums/ButtonType'

defineProps({
    type: {
        type: String as PropType<ButtonType>,
        default: ButtonType.DEFAULT,
    },
})
</script>

<style lang="sass" scoped></style>
