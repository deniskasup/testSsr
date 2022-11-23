/** Товар */
export interface Product {

    /** id товара */
    id: number

    /** URI */
    alias: string

    /** Артикул */
    article?: string

    /** Имя товара */
    name: string

    /** Заголовок h1 */
    pageTitle: string

    /** Заголовок вкладки для тега title */
    title: string;

    /** Meta description */
    description: string

    /** Актуальная цена на товар для выбранного города */
    price: number

    /** Цена на товар без учёта скидки для выбранного города. Приходит, если на товар есть скидка */
    oldPrice?: number

    /** Описание товара. Содержит HTML-теги */
    content: string

    /** В наличии */
    inStock: boolean

    /** Цвет */
    color: ProductColor | [ProductColor, ProductColor]

    /** Все доступные цвета */
    colors: ProductColorOption[]

    /** Размер кровати. Только для кроватей. */
    bedSize?: BedSize
    /** Все доступные размеры кроватей */
    bedSizes?: BedSizeOption[]

    /** Все доступные типы матрасов */
    mattressTypes?: MattressType[]

    /** Тип основания */
    baseType?: BaseType
    /** Все доступные типы оснований */
    baseTypes?: BaseType[]

    /** Изображения товара */
    images: string[]

    /** Количество ящиков. Только для кроватей. */
    drawersCount?: number
    drawersCounts?: DrawerCount[]

    /** Есть подъёмный механизм. Только для кроватей. */
    hasLiftMechanism?: boolean

    /** Картинки для 360 */
    images360?: string[]

    /** Теги "ХИТ", "НОВИНКА" и т.д. */
    tags?: string[]

    /** Характеристики */
    details?: ProductDetailCategory[]

    /** Ссылка на PDF с инструкцией */
    instructionPDF?: string

    /** Ссылка на видео по сборке */
    instructionVideo?: string;

    /** Дополнительные услуги */
    additionalServices?: AdditionalService[]

    /** Модули кхуни. Приходит для модульных кухонь
     * @todo возможно здесь не всё нужно будет, тогда будет отдельный интерфейс KitchenModule в виде кастрированного Product */
    kitchenModules?: Product
}

interface AdditionalService {
    type: AdditionalServiceType
    name: string
    price?: number
}

enum AdditionalServiceType {
    FIXED_PRICE,
    CALCULATING_BY_MANAGER,
}

interface ProductDetailCategory {
    name: string
    details: ProductDetail[]
}

interface ProductDetail {
    name: string
    value: string
}

interface MattressType {
    id: string
    name: string
    price: number
    image: string
}

interface DrawerCount {
    count: number
    alias: string
}

interface BaseType {
    name: string
    price: number
}

/** @todo[url_or_alias] уточнить у Иры по ссылкам. Возможно буду присылать только alias, а ссылку будем на фронте собирать */
interface BedSizeOption {
    size: BedSize
    url: string
}

type BedSize = '160x200' | '180x200' | '200x200';

interface ProductColor {
    color: string
    name: string
}

/** @todo[url_or_alias] */
interface ProductColorOption {
    color: ProductColor | [ProductColor, ProductColor]
    url: string
}