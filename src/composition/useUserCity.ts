import { storeToRefs } from 'pinia'
import { navigateTo, showError, unref, useRoute } from '#imports'
import useModals from '~/composition/useModals'
import myFetch from '~/composition/useMyFetch'
import { IResponse } from '~/model/interfaces/IResponse'
import { useCityStore } from '~/composition/store/useCityStore'

export function useUserCity() {
    const { showCheckCity } = useModals()
    const { isUserSelectCity, citiesList, cityCodeFromRoute, selectedCityCode } = storeToRefs(useCityStore())
    const { setCitiesList } = useCityStore()

    const getCitiesList = async () => {
        const { data: response } = await myFetch<IResponse>('city/getlist')
        if (unref(response)?.success) {
            setCitiesList(unref(response)?.data?.cities ?? [])
        }
    }

    const checkCity = () => {
        const isCityFromRouteExist = unref(citiesList).find((city) => city.code === cityCodeFromRoute.value)
        if (!isCityFromRouteExist) {
            return showError({ statusCode: 404 })
        }
        if (
            !isUserSelectCity.value ||
            (!!selectedCityCode.value && selectedCityCode.value !== cityCodeFromRoute.value)
        ) {
            return showCheckCity()
        }
    }

    return {
        getCitiesList,
        checkCity,
    }
}
