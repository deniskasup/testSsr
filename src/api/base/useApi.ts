import {useFetch} from '#imports'

export const useApi = ({baseUrl, headers}) => {
    const get = (endpoint, {params, options = {}} = {}) => useFetch(endpoint, {
        baseUrl,
        headers,
        params,
        method: 'GET',
        ...options,
    });

    const post = (endpoint, data, {params, options = {}} = {}) => useFetch(endpoint, {
        baseUrl,
        headers,
        params,
        body: data,
        method: 'POST',
        ...options,
    });

    return {
        get,
        post,
    };
}