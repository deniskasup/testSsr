import { useCookie } from '#imports'
import useModals from '~/composition/useModals'
import { CityKey } from '~/model/enums/CityKey'

export function useUserCity() {
    const { showCheckCity } = useModals()
    const userCity = useCookie('city', {
        expires: new Date(new Date().getTime() + 432e10),
        path: '/',
        secure: true,
    })

    const getUserCityByIP = async (): Promise<{ name: string; key: string }> => {
        return { name: 'Санкт-Петербург', key: CityKey.SPB }
    }

    const checkCity = async () => {
        if (!userCity.value) {
            await showCheckCity()
        }
    }
    const setUserCity = (cityKey: CityKey) => {
        console.log(userCity.value, cityKey)
        userCity.value = cityKey
    }
    return {
        checkCity,
        setUserCity,
        getUserCityByIP,
    }
}
