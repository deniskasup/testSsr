<template>
    <div class="breadcrumbs">
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
    </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.breadcrumbs
    display: flex
    align-items: center
.breadcrumbs-list
    display: flex
    align-items: center
    &__item
        display: flex
        align-items: center
        &:not(:last-of-type)::after
            content: '/'
            display: block

            margin: 0 .5ch
</style>
