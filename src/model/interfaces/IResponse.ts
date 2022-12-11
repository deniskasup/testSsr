export interface IResponse {
    success: boolean
    data: any
    message: string
    meta: {
        total_time: string
        query_time: string
        php_time: string
        queries: number
        source: string
        memory: string
    }
}
