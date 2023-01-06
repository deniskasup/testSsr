<template>
    <div class="tags">
        <div v-for="tag in tags" :key="`tag-${tag}`" class="tags__item" :class="getTagClassByName(tag)">
            {{ tag }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { Tag } from '~/api/product/interfaces/Product'
import getTagClassByName from '~/helpers/getTagClassByName'

defineProps({
    tags: {
        type: Array as PropType<Tag[]>,
        default: () => [],
    },
    size: {
        type: String,
        default: 'medium',
    },
})
</script>

<style lang="sass" scoped>
.tags
    display: flex
    align-items: center
    &__item
        text-align: center
        color: $color_surface_primary
        border-radius: 72px
        padding: 8px 24px
        &:not(:last-of-type)
            margin-right: 12px
        &.novelty
            background-color: $color_new
        &.hit
            background-color: $color_hit
        &.buyers-choice
            background-color: $color_like
</style>
