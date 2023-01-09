<template>
    <ModalsModalRoot>
        <div class="modal-check-city">
            <h3 class="modal-check-city__title">Ваш город – {{ cityNameByCode(cityCode) }}?</h3>
            <div class="modal-check-city__actions modal-check-city-actions">
                <CustomButton size="s" @click="confirmCity">Да, верно</CustomButton>
                <CustomButton size="s" priority="secondary" @click="openSelectCityModal"> Нет, другой </CustomButton>
            </div>
        </div>
    </ModalsModalRoot>
</template>

<script setup lang="ts">
import { $vfm } from 'vue-final-modal'
import { storeToRefs } from 'pinia'
import CustomButton from '../UIComponents/formElements/CustomButton.vue'
import useModals from '~/composition/useModals'
import { useRoute } from '#imports'
import { useCityStore } from '~/composition/store/useCityStore'

const { showSelectCity } = useModals()
const { setSelectedCityCode } = useCityStore()
const { cityNameByCode } = storeToRefs(useCityStore())
const route = useRoute()
const cityCode = Array.isArray(route.params.city) ? route.params.city[0] : route.params.city || 'msk'

const confirmCity = async () => {
    await setSelectedCityCode(cityCode)
    await $vfm.hideAll()
}

const openSelectCityModal = async () => {
    await $vfm.hideAll()
    await showSelectCity()
}
</script>

<style lang="sass" scoped>
.modal-check-city
    display: grid
    grid-gap: 32px
    &__title
        +h3

.modal-check-city-actions
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 12px
</style>
