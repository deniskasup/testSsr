import { useFetch, useRequestHeaders } from '#imports'
type UseFetch = typeof useFetch

const baseURL = 'http://api.aroyan7k.beget.tech'

const myFetch: UseFetch = (request, opts) => {
    return useFetch(request, {
        baseURL,
        headers: useRequestHeaders(['cookie']) as Record<string, string>,
        ...opts,
    })
}

export default myFetch
