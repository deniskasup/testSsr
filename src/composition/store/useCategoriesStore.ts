import { defineStore } from '#imports'
import { CategoryTreeItem } from '~/api/categories/interfaces/CategoryTreeItem'

export const useCategoriesStore = defineStore('categories', {
    state: () => {
        return {
            categoriesTree: [] as CategoryTreeItem[],
        }
    },
    actions: {
        setCategoriesTree(categoriesTree: CategoryTreeItem[]) {
            this.categoriesTree = categoriesTree
        },
    },
    getters: {
        categoriesMapByUrl: (state) => {
            const map = new Map<string, CategoryTreeItem>()

            const traverse = (item: CategoryTreeItem) => {
                map.set(item.url, item)

                item.tags?.forEach(traverse)
                item.subcategories?.forEach(traverse)
            }

            state.categoriesTree.forEach((item) => traverse(item))

            return map
        },
    },
})
