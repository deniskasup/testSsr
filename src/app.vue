<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <NeedHelpButton />
    <ModalsContainer />
</template>

<script setup lang="ts">
import { onMounted, useNuxtApp } from '#imports'
import useModals from '~/composition/useModals'
const nuxtApp = useNuxtApp()
const {
    showReview,
    showRegistration,
    showNeedHelp,
    showOneClick,
    showCheckCity,
    showSelectCity,
    showNotion,
} = useModals()
// TODO: возможно есть решение по красивее
nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0)
})
onMounted(() => {
    // Раскоментируй нужную
    showReview('Кровать')
    // showRegistration()
    // showNeedHelp()
    // showOneClick()
    // showCheckCity()
    // showSelectCity()
    // showNotion('👍', 'Спасибо!', 'Заявка отправлена, мы скоро с вами свяжемся')
})
</script>

<style lang="sass" scoped></style>
