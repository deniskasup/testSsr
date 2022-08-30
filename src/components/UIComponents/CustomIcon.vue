<template>
    <component :is="componentTag" :href="href" :to="to">
        <div>icon</div>
    </component>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { IconType } from '~/model/enums/IconType'

const props = defineProps({
    type: {
        type: String as PropType<IconType>,
        default: IconType.BLOCK,
    },
    icon: {
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
    if (props.type === IconType.ROUTER_LINK) {
        return defineNuxtLink({})
    }
    return props.type
})
</script>

<style lang="sass" scoped></style>
