import { useRoute } from '#imports'

/**
 * @param link обязательно без "/" в начале
 */
export default function linkWithCity(link: string) {
    const route = useRoute()
    const cityCodeFromRoute = (Array.isArray(route.params.city) ? route.params.city[0] : route.params.city) || 'msk'
    const formattedLink = link === '/' ? '' : link

    if (cityCodeFromRoute === 'msk') {
        return `/${formattedLink}`
    }
    return `/${cityCodeFromRoute}/${formattedLink}`
}
