import myFetch from '~/composition/useMyFetch'
import { unref } from '#imports'
import { IResponse } from '~/model/interfaces/IResponse'
import { useCategoriesStore } from '~/composition/store/useCategoriesStore'

export default function useCategoriesRequests() {
    const getCategoriesTree = async () => {
        const { data: response } = await myFetch<IResponse>('categories/gettree')
        const categoriesStore = useCategoriesStore()
        if (unref(response)?.success) {
            categoriesStore.setCategoriesTree(unref(response)?.data.categories)
        }
    }
    const getCategoryData = (categoryName: string) => {
        return myFetch<IResponse>(`categories/get/${categoryName}`)
    }
    return {
        getCategoriesTree,
        getCategoryData,
    }
}
