import { useApiInstance } from '~/api/base/useApiInstance'
import { OrderApi } from '~/api/order/OrderApi'

export const useOrderApi = useApiInstance(OrderApi);