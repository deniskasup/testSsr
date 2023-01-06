import { Tag } from '~/api/product/interfaces/Product'

export interface CategoryProduct {
    id: number
    /** Актуальная цена */
    price?: number
    /** Цена до скидок */
    old_price?: number
    /** Конкретное название товара */
    name: string
    /** Превью картинка */
    image?: string
    /** Ссылка на товар */
    url: string
    // нужно добавить
    /** Категория "Кровать, Матрас и тд */
    category: string
    /** Добавлен ли товар в избранное */
    isFavorite: boolean
    tags: Tag[]
}
