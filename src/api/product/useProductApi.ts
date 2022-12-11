import { useApiInstance } from "~/api/base/useApiInstance";
import { ProductApi } from "~/api/product/ProductApi";

export const useProductApi = () => useApiInstance(ProductApi) as ProductApi;