import { defineEventHandler } from 'h3'
import { Product, Tag } from '~/api/product/interfaces/Product'

export default defineEventHandler((event): Product => {
    return {
        /** id товара */
        id: 123321,

        /** URI */
        alias: 'krovat-myagkaya',

        /** Артикул */
        article: '#3123134',

        /** Имя товара */
        name: 'Кровать',

        /** Заголовок h1 */
        pageTitle: 'Тест детская кровать',

        /** Заголовок вкладки для тега title */
        title: 'Тест Кровать',

        /** Meta description */
        description: 'Тест кровать описание',

        /** Актуальная цена на товар для выбранного города */
        price: 4499,

        /** Цена на товар без учёта скидки для выбранного города. Приходит, если на товар есть скидка */
        oldPrice: 5999,

        /** Описание товара. Содержит HTML-теги */
        content: 'Описание товара. <br> Содержит HTML-теги',

        /** В наличии */
        inStock: true,

        /** Цвет */
        color: {
            name: 'Синий',
            color: 'blue',
        },

        /** Все доступные цвета */
        colors: [
            {
                color: {
                    name: 'Синий',
                    color: 'blue',
                },
                url: '/blue',
            },
            {
                color: {
                    name: 'Розовый',
                    color: 'pink',
                },
                url: '/pink',
            },
            {
                color: {
                    name: 'Зеленый',
                    color: 'green',
                },
                url: '/green',
            },
        ],

        bedOptions: {
            /** Размер кровати. Только для кроватей. */
            bedSize: '160x200',

            /** Все доступные размеры кроватей */
            bedSizes: [
                {
                    size: '160x200',
                    url: '/test/stest',
                },
            ],

            /** Все доступные типы матрасов */
            mattressTypes: [
                {
                    id: '123',
                    name: 'мягкий',
                    price: 2000,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87AuxTxGqLj7Y8MBN4Zpch7uVoFGTniuzEHabSHG96g&s',
                },
            ],

            /** Тип основания */
            baseType: {
                name: 'тип основания',
                price: 5000,
            },
            /** Все доступные типы оснований */
            baseTypes: [
                {
                    name: 'тип основания',
                    price: 5000,
                },
            ],

            /** Количество ящиков. Только для кроватей. */
            drawersCount: 2,
            drawersCounts: [
                {
                    count: 3,
                    alias: '/test',
                },
                {
                    count: 2,
                    alias: '/test',
                },
            ],

            /** Есть подъёмный механизм. Только для кроватей. */
            hasLiftMechanism: true,
        },

        /** Изображения товара */
        images: [
            'https://ormamebel.ru/wa-data/public/shop/products/40/26/2640/images/14229/14229.970.jpeg',
            'https://cdn.inmyroom.ru/uploads/photo/file/06/06a8/product_modal_cover_06a847b3-b26e-49ac-9efb-5a7fbc1f7586.jpg',
        ],

        /** Картинки для 360 */
        images360: [],

        /** Теги "ХИТ", "НОВИНКА" и т.д. */
        tags: [Tag.NOVELTY],

        /** Характеристики */
        details: [
            {
                name: 'Спальное место',
                details: [
                    {
                        name: 'Ширина',
                        value: '20 cm',
                    },
                    {
                        name: 'Высота',
                        value: '20 cm',
                    },
                ],
            },

            {
                name: 'Спальное место1',
                details: [
                    {
                        name: 'Ширина gsdfsd',
                        value: '20 cm',
                    },
                    {
                        name: 'Высота sasd',
                        value: '20 cm',
                    },
                ],
            },

            {
                name: 'Спальное место2',
                details: [
                    {
                        name: 'Ширина',
                        value: '20 cm',
                    },
                    {
                        name: 'Высотаasdasd asdsd',
                        value: '20 cm',
                    },
                ],
            },

            {
                name: 'Спальное место3',
                details: [
                    {
                        name: 'Ширина sasd d',
                        value: '20 cm',
                    },
                    {
                        name: 'Высота dasds',
                        value: '20 cm',
                    },
                ],
            },
        ],

        /** Ссылка на PDF с инструкцией */
        instructionPDF: 'test/link',

        /** Ссылка на видео по сборке */
        instructionVideo: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',

        reviews: {
            avgRating: 4,
            count: 4,
        },

        /** Дополнительные услуги */
        additionalServices: [
            {
                type: 0,
                name: 'Подъем на этаж',
                price: 300,
            },
            {
                type: 1,
                name: 'Добавить сборку',
                price: 300,
            },
        ],

        isFavorite: false,

        /** Модули кхуни. Приходит для модульных кухонь
         * @todo возможно здесь не всё нужно будет, тогда будет отдельный интерфейс KitchenModule в виде кастрированного Product */
        // kitchenModules?: Product
    }
})
