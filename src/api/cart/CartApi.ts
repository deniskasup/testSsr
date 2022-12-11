import { Api } from '../base/Api'
import { ApiDependencies } from '../base/interfaces/ApiDependencies'
import { COMMON_HEADERS, JSON_API_HEADERS } from '~/api/constants'

/** API корзины */
export class CartApi extends Api
{
    constructor(dependencies: ApiDependencies) {
        super(dependencies);
    }

    async add({ id, count }: {id: number; count: number}) {
        const endpoint = 'cart/add';

        return this.post(
            endpoint,
            { id, count },
            { headers: { ...COMMON_HEADERS } }
        );
    }

    async change({id, count}: {id: number; count: number}) {
        const endpoint = 'cart/change';

        return this.post(
            endpoint,
            {key: id, count},
            { headers: { ...COMMON_HEADERS } }
        )
    }

    async remove({id}: {id: number}) {
        const endpoint = 'cart/remove';

        return this.post(
            endpoint,
            {key: id},
            { headers: { ...COMMON_HEADERS } }
        )
    }

    async clean() {
        const endpoint = 'cart/clean';

        return this.post(
            endpoint,
            { headers: { ...COMMON_HEADERS } }
        )
    }

    async getCart() {
        const endpoint = 'cart/get';

        return this.get(
            endpoint,
            { headers: { ...COMMON_HEADERS } }
        )
    }

}