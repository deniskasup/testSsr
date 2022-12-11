import { useApi } from '~/api/base/useApi'
import { API_PATH } from '~/api/constants'

export const useCartApi = () => {
    const {
        post,
        get,
    } = useApi({
        baseUrl: API_PATH,
        headers: {
            'Content-Type': 'multipart/form-data',
             Accept: 'application/json',
        }
    });

    const getCart = async () => get('cart/get');

    const addProduct = async ({ id, count }: {id: number; count: number}) => post('cart/add', {id, count});

    const changeProductCount = async ({ id, count }: {id: number; count: number}) => post('cart/change', {id, count});

    const removeProduct = async ({id}: {id: number}) => post('cart/remove', {id});

    const cleanCart = async () => post('cart/clean');

    return {
        getCart,
        addProduct,
        changeProductCount,
        removeProduct,
        cleanCart,
    }
}