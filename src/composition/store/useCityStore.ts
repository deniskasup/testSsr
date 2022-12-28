import { useStorage } from '@vueuse/core'
import { computed, defineStore, navigateTo, reactive, useRoute } from '#imports'

type City = {
    name: string
    code: string
}

export const useCityStore = defineStore('city', () => {
    const route = useRoute()

    const state = reactive({
        selectedCityCode: useStorage('selectedCityCode', ''),
        isUserSelectCity: useStorage('isUserSelectCity', ''),
        citiesList: [] as City[],
        cityCodeFromRoute: Array.isArray(route.params.city) ? route.params.city[0] : route.params.city || 'msk',
    })

    // TODO: отрефакторить
    const setSelectedCityCode = async (code: string, withReload = false) => {
        state.selectedCityCode = code
        state.isUserSelectCity = '1'
        const cityFromRoute = Array.isArray(route.params.city) ? route.params.city[0] : route.params.city
        const isNewCityCodeMsk = state.selectedCityCode === 'msk'
        if (cityFromRoute) {
            const href = route.path.replace(`/${cityFromRoute}`, `${isNewCityCodeMsk ? '' : state.selectedCityCode}`)
            const correctPath = isNewCityCodeMsk ? href : `/${href}`

            await navigateTo(correctPath)
        } else {
            const cityCodeInLink = state.selectedCityCode === 'msk' ? '/' : state.selectedCityCode
            await navigateTo(`${cityCodeInLink}${route.path === '/' ? '' : route.path}`)
        }

        if (withReload) {
            location.reload()
        }
    }

    const setCitiesList = (list: City[]) => {
        state.citiesList = list
    }

    const getters = {
        selectedCityCode: computed(() => state.selectedCityCode),
        isUserSelectCity: computed(() => state.isUserSelectCity),
        citiesList: computed(() => state.citiesList),
        selectedCityName: computed(
            () =>
                state.citiesList.find((city) => {
                    if (state.selectedCityCode) {
                        return city.code === state.selectedCityCode
                    }
                    return city.code === state.cityCodeFromRoute
                })?.name
        ),
        cityNameByCode: computed(() => {
            return (code: string) => state.citiesList.find((city) => city.code === code)?.name ?? ''
        }),
        filtredCitiesList: computed(() => {
            return (str: string) =>
                str
                    ? state.citiesList.filter((city) => city.name.toLowerCase().includes(str.toLowerCase()))
                    : state.citiesList
        }),
        cityCodeFromRoute: computed(() => state.cityCodeFromRoute),
    }

    return {
        ...getters,
        setSelectedCityCode,
        setCitiesList,
    }
})
