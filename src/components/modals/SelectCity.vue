<template>
    <ModalsModalRoot>
        <div class="modal-select-city">
            <div class="modal-select-city__head modal-select-city-head">
                <h3 class="modal-select-city-head__title">Какой ваш город?</h3>
                <div class="modal-select-city-head__description">
                    Выберите из списка или введите в поиске
                </div>
            </div>

            <CustomSearch placeholder="Где вы находитесь?" />
            <div class="modal-select-city__list modal-select-city-list">
                <div class="modal-select-city-list__item">Москва</div>
                <div class="modal-select-city-list__item">Санкт-Перербург</div>
                <div class="modal-select-city-list__item">Краснодар</div>
                <div class="modal-select-city-list__item">Казань</div>
                <div class="modal-select-city-list__item">Екатеринбург</div>
            </div>
        </div>
    </ModalsModalRoot>
</template>

<script setup lang="ts">
import CustomSearch from '../UIComponents/formElements/CustomSearch'
</script>
<style lang="sass" scoped>
.modal-select-city
    display: grid
    grid-gap: 32px
.modal-select-city-head
    display: grid
    grid-gap: 16px
    &__title
        +h2
    &__description
        color: $color_onsurface_secondary
.modal-select-city-list
    display: grid
    grid-gap: 16px
</style>
