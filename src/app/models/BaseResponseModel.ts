export type BaseResponseModel<T> = {
    success: boolean,
    message: string,
    errorMessage: string,
    data: T,
    token: string
}

export type PageListResponse = {
    pageList: UserResponse[],
    paginationInfo: PaginationInfo
}

type PaginationInfo = {
    pageCurrent: number,
    totalPages: number,
    pageSize: number,
    totalItem: number,
    hasPreviousPage: boolean,
    hasNextPage: boolean,
}

export type UserResponse = {
    id: number,
    fullName: string,
    email: string,
    userName: string,
    status: 2
}