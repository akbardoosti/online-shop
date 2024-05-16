export type ApiResponse<T> = {
    hasNextPage: boolean,
    hasPreviousPage: boolean,
    items: Array<T>,
    pageNumber: number,
    totalCount: number,
    totalPages: number
}