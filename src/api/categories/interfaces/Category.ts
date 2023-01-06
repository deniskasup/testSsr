import { CategoryProduct } from '~/api/categories/interfaces/CategoryProduct'

export interface Category {
    id: string
    pageTitle: string
    description: string
    products: CategoryProduct[]
}
