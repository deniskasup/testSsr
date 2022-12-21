import { useStorage } from '@vueuse/core'
import { defineStore } from '#imports'

type City = {
    name: string
    code: string
}

export const useCityStore = defineStore('city', {
    state: () => ({
        selectedCity: useStorage('selectedCity', 'spb'),
        isUserSelectCity: useStorage('isUserSelectCity', ''),
        citiesList: [] as City[],
    }),

    actions: {
        setSelectedCity(code: string) {
            this.selectedCity = code
            this.isUserSelectCity = '1'
            document.cookie = `city=${code}; path=/; expires=${new Date(new Date().getTime() + 432e10)}`
            location?.reload()
        },
        setCitiesList(list: City[]) {
            this.citiesList = list
        },
    },

    getters: {
        selectedCityName: (state) => state.citiesList.find((city) => city.code === state.selectedCity)?.name,
        cityNameByCode: (state) => {
            return (code: string) => state.citiesList.find((city) => city.code === code)?.name ?? ''
        },
        filtredCitiesList: (state) => {
            return (str: string) =>
                str
                    ? state.citiesList.filter((city) => city.name.toLowerCase().includes(str.toLowerCase()))
                    : state.citiesList
        },
    },

    hydrate(state, initialState) {
        // @ts-ignore
        state.selectedCity = useStorage('selectedCity', 'spb')
        // @ts-ignore
        state.isUserSelectCity = useStorage('isUserSelectCity', '')
    },
})
