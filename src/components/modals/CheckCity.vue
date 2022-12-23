<template>
    <ModalsModalRoot>
        <div class="modal-check-city">
            <h3 class="modal-check-city__title">Ваш город – {{ cityNameByCode(guessedCity) }}?</h3>
            <div class="modal-check-city__actions modal-check-city-actions">
                <CustomButton :size="Size.SMALL" @click="confirmCity">Да, верно</CustomButton>
                <CustomButton :size="Size.SMALL" :priority="ButtonPriority.SECONDARY" @click="openSelectCityModal">
                    Нет, другой
                </CustomButton>
            </div>
        </div>
    </ModalsModalRoot>
</template>

<script setup lang="ts">
import { $vfm } from 'vue-final-modal'
import { storeToRefs } from 'pinia'
import CustomButton from '../UIComponents/formElements/CustomButton.vue'
import { ButtonPriority } from '~/model/enums/formElements/ButtonPriority'
import { Size } from '~/model/enums/formElements/Size'
import useModals from '~/composition/useModals'
import { useUserCity } from '~/composition/useUserCity'
import { onBeforeMount, ref, unref } from '#imports'
import { useCityStore } from '~/composition/store/useCityStore'

const { showSelectCity } = useModals()
const { setSelectedCityCode } = useCityStore()
const { cityNameByCode } = storeToRefs(useCityStore())
const { guessUserCity } = useUserCity()

const guessedCity = ref('')

const confirmCity = async () => {
    setSelectedCityCode(unref(guessedCity))
    await $vfm.hideAll()
}

const openSelectCityModal = async () => {
    await $vfm.hideAll()
    await showSelectCity()
}

onBeforeMount(async () => {
    guessedCity.value = await guessUserCity()
})
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
