import { Product } from '~/api/categories/interfaces/Product'

export interface Category {
    id: string
    pageTitle: string
    description: string
    products: Product[]
}
