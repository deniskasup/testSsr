<template>
    <component :is="componentTag" class="icon-container" :href="href" :to="to">
        <Icon v-if="iconName" class="icon-container__icon" :name="iconName" />
        <template v-else>
            <slot />
        </template>
    </component>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { IconType } from '~/model/enums/IconType'
import { computed, defineNuxtLink } from '#imports'

const props = defineProps({
    iconType: {
        type: String as PropType<IconType>,
        default: IconType.ROUTER_LINK,
    },
    iconName: {
        type: String,
        default: '',
    },
    to: {
        type: String,
        default: null,
    },
    href: {
        type: String,
        default: null,
    },
})

const componentTag = computed(() => {
    if (props.iconType === IconType.ROUTER_LINK) {
        return defineNuxtLink({})
    }
    return props.iconType
})
</script>

<style lang="sass" scoped>
.icon-container
    display: flex
    align-items: center
    justify-content: center
    &__icon
        width: 100%
        height: 100%
        color: currentColor
</style>
