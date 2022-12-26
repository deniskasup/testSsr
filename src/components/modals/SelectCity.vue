<template>
    <ModalsModalRoot>
        <div class="modal-select-city">
            <div class="modal-select-city__head modal-select-city-head">
                <h3 class="modal-select-city-head__title">Какой ваш город?</h3>
                <div class="modal-select-city-head__description">Выберите из списка или введите в поиске</div>
            </div>

            <CustomSearch v-model="searchInputValue" placeholder="Где вы находитесь?" />
            <div class="modal-select-city__list modal-select-city-list">
                <div
                    v-for="city in filtredCitiesList(searchInputValue)"
                    :key="city.code"
                    class="modal-select-city-list__item"
                    @click="selectCity(city.code)"
                >
                    {{ city.name }}
                </div>
            </div>
        </div>
    </ModalsModalRoot>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { $vfm } from 'vue-final-modal'
import CustomSearch from '../UIComponents/formElements/CustomSearch.vue'
import { useCityStore } from '~/composition/store/useCityStore'
import { ref } from '#imports'
const searchInputValue = ref('')

const { filtredCitiesList } = storeToRefs(useCityStore())
const { setSelectedCityCode } = useCityStore()

const selectCity = (code: string) => {
    setSelectedCityCode(code, true)
    $vfm.hideAll()
}
</script>
<style lang="sass" scoped>
.modal-select-city
    display: grid
    grid-gap: 32px
    min-height: 340px
    align-content: flex-start
.modal-select-city-head
    display: grid
    grid-gap: 16px
    &__title
        +h2
    &__description
        color: $color_onsurface_secondary
.modal-select-city-list
    display: grid
    align-items: flex-start
    justify-items: flex-start
    grid-gap: 16px
    &__item
        cursor: pointer
</style>
