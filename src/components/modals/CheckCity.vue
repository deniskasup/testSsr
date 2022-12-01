<template>
    <ModalsModalRoot>
        <div class="modal-check-city">
            <h3 class="modal-check-city__title">Ваш город – Москва?</h3>
            <div class="modal-check-city__actions modal-check-city-actions">
                <CustomButton :size="Size.SMALL">Да, верно</CustomButton>
                <CustomButton :size="Size.SMALL" :priority="ButtonPriority.SECONDARY">
                    Нет, другой
                </CustomButton>
            </div>
        </div>
    </ModalsModalRoot>
</template>

<script setup lang="ts">
import CustomButton from '../UIComponents/formElements/CustomButton'
import { ButtonPriority } from '~/model/enums/formElements/ButtonPriority'
import { Size } from '~/model/enums/formElements/Size'
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
