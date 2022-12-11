import { useFetch, useRequestHeaders } from '#imports'
type UseFetch = typeof useFetch

const myFetch: UseFetch = (request, opts) => {
    return useFetch(request, {
        baseURL: 'http://api.aroyan7k.beget.tech',
        headers: useRequestHeaders(['cookie']) as Record<string, string>,
        ...opts,
    })
}

export default myFetch
