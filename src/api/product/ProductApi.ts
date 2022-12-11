import { Api } from '../base/Api'
import { Product } from './interfaces/Product'

export class ProductApi extends Api {

    async getProduct({alias}: {alias: string}): Promise<Product> {
        return this.get(`/product/${alias}`);
    }
}