<template>
    <div class="catalog-menu">
        <Wrapper class="catalog-menu__wrapper">
            <div class="catalog-menu__categories catalog-menu-categories">
                <NuxtLink
                    v-for="category in categoriesTree"
                    :key="category.id"
                    :to="linkWithCity(`catalog/${category.url}`)"
                    class="catalog-menu-categories__link"
                    :class="{ 'catalog-menu-categories__link--active': isCategoryActive(category.id) }"
                    @click="hideMenu"
                    @mouseenter="setSelectedCategory(category)"
                >
                    {{ category.name }}
                </NuxtLink>
            </div>
            <div class="catalog-menu__sub-categories catalog-menu-sub-categories">
                <NuxtLink
                    v-for="category in subCategories"
                    :key="category.id"
                    :to="linkWithCity(`catalog/${category.url}`)"
                    class="catalog-menu-sub-categories__link"
                    @click="hideMenu"
                >
                    {{ category.name }}
                </NuxtLink>
            </div>
            <div class="catalog-menu__preview-photo catalog-menu-preview-photo"></div>
        </Wrapper>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref, unref } from '#imports'
import { useCategoriesStore } from '~/composition/store/useCategoriesStore'
import linkWithCity from '~/helpers/linkWithCity'
import { CategoryTreeItem } from '~/api/categories/interfaces/CategoryTreeItem'
const emit = defineEmits(['hide'])
const { categoriesTree, categoriesMapByUrl } = storeToRefs(useCategoriesStore())

const hideMenu = () => {
    emit('hide', '')
}
const selectedCategory = ref<CategoryTreeItem>(unref(categoriesTree)[0])
const setSelectedCategory = (category: CategoryTreeItem) => {
    selectedCategory.value = category
}

const isCategoryActive = (categoryId: number) => unref(selectedCategory)?.id === categoryId

const subCategories = computed(() => {
    if (selectedCategory.value) {
        return unref(categoriesMapByUrl).get(unref(selectedCategory).url)?.subcategories || []
    }

    return []
})
</script>

<style lang="sass" scoped>
.catalog-menu
    position: absolute
    top: 100%
    left: 0
    width: 100%
    padding: 56px 0
    background-color: $color_surface_primary
    box-shadow: 0 5px 0 $color_onsurface_quaternary
    z-index: 2
    &__wrapper
        display: grid
        grid-template-columns: 1fr 1fr 400px
        align-items: flex-start

.catalog-menu-categories
    display: grid
    grid-gap: 12px
    justify-items: flex-start
    &__link
        position: relative
        font-weight: 500
        font-size: 18px
        white-space: nowrap
        transition: color .3s
        +no-select

        &.router-link-active
            color: $color_primary

        &:not(.router-link-active):hover
            color: $color_onsurface_tetriary
        &--active
            &::after
                content: ''
                width: 9px
                height: 9px
                border-bottom: 2px solid
                border-right: 2px solid
                transform: rotate(-45deg) translateY(-50%)
                position: absolute
                top: 50%
                right: -30px


.catalog-menu-sub-categories
    display: grid
    grid-gap: 24px
    justify-items: flex-start
    &__link
        font-size: 14px
        position: relative
        white-space: nowrap
        transition: color .3s
        +no-select

        &.router-link-active
            color: $color_primary

        &:not(.router-link-active):hover
            color: $color_onsurface_tetriary

.catalog-menu-preview-photo
    position: relative
    padding-top: 100%
    background-color: #ccc
</style>
