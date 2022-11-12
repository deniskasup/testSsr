<template>
    <main class="main-page">
        <MainSlider />

        <ProductsSlider>
            <template #title>Популярные товары</template>
        </ProductsSlider>

        <ClientOnly>
            <Showcase />
        </ClientOnly>

        <PromoSlider />

        <Advantages />

        <OurGoal />

        <MainReviews />
        <NeedHelp />
    </main>
</template>

<script setup lang="ts">
import MainSlider from '~/components/MainSlider.vue'
import ProductsSlider from '~/components/ProductsSlider.vue'
import Showcase from '~/components/Showcase.vue'
import PromoSlider from '~/components/PromoSlider.vue'
import Advantages from '~/components/Advantages.vue'
import OurGoal from '~/components/OurGoal.vue'
import MainReviews from '~/components/MainReviews.vue'
import NeedHelp from '~/components/NeedHelp.vue'
</script>
<style lang="sass" scoped>
.main-page
    overflow: hidden
    width: 100%
    //max-width: 1440px
    margin: 0 auto
    display: grid
    grid-gap: 100px
    +until-tablet
        grid-gap: 75px
    +while-mob
        grid-gap: 55px

    & > *
        width: 100vw
</style>
