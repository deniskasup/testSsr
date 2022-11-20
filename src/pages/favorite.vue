<template>
    <main class="default-page favorite-page">
        <section class="favorite">
            <Breadcrumbs class="favorite__breadcrumbs" />
            <Wrapper class="favorite__wrapper">
                <h2 class="favorite__title">Избранное</h2>
            </Wrapper>
        </section>
        <NeedHelp />
    </main>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
    title: 'Избранное',
})
</script>

<style lang="sass" scoped>
.favorite
    &__wrapper
        display: grid
        grid-gap: 40px
    &__title
        font-weight: 700
        font-size: 26px
        line-height: 30px
        +until-tablet
            font-size: 24px
            line-height: 24px
        +while-mob
            font-size: 20px
</style>
