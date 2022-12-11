import { COMMON_HEADERS } from '~/api/constants'
import { Api } from '~/api/base/Api'

/** @todo параметры запросов */
export class OrderApi extends Api {
    async add() {
        const endpoint = 'order/add';

        return this.post(endpoint, {}, {headers: {...COMMON_HEADERS}});
    }


    async submit() {
        const endpoint = 'order/submit';

        return this.post(endpoint, {}, {headers: {...COMMON_HEADERS}});
    }


    async getCost() {
        const endpoint = 'order/getcost';

        return this.get(endpoint, {headers: {...COMMON_HEADERS}});
    }


    async getRequired() {
        const endpoint = 'order/getrequired';

        return this.get(endpoint, {headers: {...COMMON_HEADERS}});
    }


    async clean() {
        const endpoint = 'order/clean';

        return this.post(endpoint, {}, {headers: {...COMMON_HEADERS}});
    }


    async getOrder() {
        const endpoint = 'order/get';

        return this.get(endpoint, {headers: {...COMMON_HEADERS}});
    }
}