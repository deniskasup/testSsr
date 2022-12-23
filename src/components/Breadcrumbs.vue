<template>
    <div class="breadcrumbs">
        <Wrapper>
            <ul class="breadcrumbs__list breadcrumbs-list">
                <li class="breadcrumbs-list__item breadcrumbs-list-item">
                    <NuxtLink class="breadcrumbs-list-item__link" to="/"> Главная </NuxtLink>
                </li>
                <li
                    v-for="item in $route.matched"
                    :key="item.name"
                    class="breadcrumbs-list__item breadcrumbs-list-item"
                >
                    <span v-if="item.path === $route.path">{{ item.meta.title || 'No TITLE' }}</span>
                    <NuxtLink v-else class="breadcrumbs-list-item__link" :to="item.path">
                        {{ item.meta.title || 'No TITLE' }}
                    </NuxtLink>
                </li>
            </ul>
        </Wrapper>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.breadcrumbs
    display: flex
    align-items: center
    padding: 24px 0
.breadcrumbs-list
    display: flex
    align-items: center
    &__item
        font-size: 12px
        color: $color_onsurface_tetriary
        display: flex
        align-items: center
        & span
            color: $color_onsurface_primary
        &:not(:last-of-type)::after
            content: '/'
            display: block

            margin: 0 1ch
</style>
