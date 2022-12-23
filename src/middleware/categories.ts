import { defineNuxtRouteMiddleware, showError } from '#imports'
import { useCategoriesStore } from '~/composition/store/useCategoriesStore'

export default defineNuxtRouteMiddleware((to, from) => {
    const categoriesStore = useCategoriesStore()
    if (
        !categoriesStore.categoriesMapByUrl.get(
            Array.isArray(to.params.category) ? to.params.category[0] : to.params.category
        )
    ) {
        // showError({ statusCode: 404, statusMessage: 'Данная категория отсутствует' })
    }
})
