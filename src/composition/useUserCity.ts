import { storeToRefs } from 'pinia'
import { unref } from '#imports'
import useModals from '~/composition/useModals'
import myFetch from '~/composition/useMyFetch'
import { IResponse } from '~/model/interfaces/IResponse'
import { useCityStore } from '~/composition/store/useCityStore'

export function useUserCity() {
    const { showCheckCity } = useModals()
    const { isUserSelectCity } = storeToRefs(useCityStore())
    const { setCitiesList } = useCityStore()

    const guessUserCity = async () => {
        const { data: response } = await myFetch<IResponse>('city/guess')
        if (unref(response)?.success) {
            return unref(response)?.data.city
        }
    }

    const loadCitiesList = async () => {
        const { data: response } = await myFetch<IResponse>('city/getlist')
        if (unref(response)?.success) {
            setCitiesList(unref(response)?.data?.cities ?? [])
        }
    }

    const checkCity = async () => {
        if (!isUserSelectCity.value) {
            await showCheckCity()
        }
    }

    return {
        loadCitiesList,
        checkCity,
        guessUserCity,
    }
}
