import myFetch from '~/composition/useMyFetch'
import { unref } from '#imports'
import { IResponse } from '~/model/interfaces/IResponse'
import { useCategoriesStore } from '~/composition/store/useCategoriesStore'
import { Category } from '~/api/categories/interfaces/Category'

export default function useCategoriesRequests() {
    const { setCategoriesTree } = useCategoriesStore()

    const getCategoriesTree = async () => {
        const { data: response } = await myFetch<IResponse>('categories/gettree')

        if (unref(response)?.success) {
            setCategoriesTree(unref(response)?.data.categories)
        }
    }
    const getCategoryData = async (categoryName: string): Promise<Category | null> => {
        const { data } = await myFetch<IResponse>(`categories/get/${categoryName}`)
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
