<template>
    <div class="product-delivery">
        <h3 class="product-delivery__title">Доставка</h3>
        <p class="product-delivery__description">
            Стоимость доставки зависит от вашего региона. Можете воспользоваться поиском, введя город и улицу.
        </p>
        <div class="product-delivery__controls product-delivery-controls">
            <CustomSearch class="product-delivery-controls__search" size="l" placeholder="Город, улица" />
            <TabsWithIcons v-model="activeTab" class="product-delivery-controls__tabs" :tabs="tabs" />
        </div>
        <button type="button" class="product-delivery__question" @click="showNeedHelp">
            💬    Задать вопрос менеджеру
        </button>
    </div>
</template>

<script setup lang="ts">
import CustomSearch from '@/components/UIComponents/formElements/CustomSearch'
import TabsWithIcons from '@/components/UIComponents/TabsWithIcons'
import useModals from '~/composition/useModals'
import { ref } from '#imports'

const { showNeedHelp } = useModals()

const activeTab = ref('list')
const tabs = [
    {
        name: 'Карта',
        value: 'map',
        icon: 'ri:map-2-line',
    },
    {
        name: 'Список',
        value: 'list',
        icon: 'ri:list-check',
    },
]
</script>

<style lang="sass" scoped>
.product-delivery
    display: flex
    flex-direction: column
    &__title
        +h3
        margin-bottom: 24px
    &__description
        margin-bottom: 16px
        font-size: 14px
        color: $color_onsurface_secondary
    &__question
        margin-top: 40px
        color: $color_primary
        font-size: 18px
        font-weight: 500
        display: flex
        align-items: center

.product-delivery-controls
    display: flex
    align-items: center
    &__search
        margin-right: 32px
</style>
