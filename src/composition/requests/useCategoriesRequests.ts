import { storeToRefs } from 'pinia'
import myFetch from '~/composition/useMyFetch'
import { unref, useRoute } from '#imports'
import { IResponse } from '~/model/interfaces/IResponse'
import { useCategoriesStore } from '~/composition/store/useCategoriesStore'
import { Category } from '~/api/categories/interfaces/Category'
import { useCityStore } from '~/composition/store/useCityStore'

export default function useCategoriesRequests() {
    const { cityCodeFromRoute } = storeToRefs(useCityStore())
    const { setCategoriesTree } = useCategoriesStore()
    const getCategoriesTree = async () => {
        const { data: response } = await myFetch<IResponse>(`categories/gettree?city=${cityCodeFromRoute.value}`)

        if (unref(response)?.success) {
            setCategoriesTree(unref(response)?.data.categories)
        }
    }
    const getCategoryData = async (categoryName: string): Promise<Category | null> => {
        const { data } = await myFetch<IResponse>(`categories/get/${categoryName}??city=${cityCodeFromRoute.value}`)
        if (data.value?.success) {
            return data.value.data
        }
        return null
    }
    return {
        getCategoriesTree,
        getCategoryData,
    }
}
