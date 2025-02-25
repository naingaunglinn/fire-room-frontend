export interface PaginatedResponseMetaLink {
    url: string | null
    label: string
    active: boolean
}

export interface PaginatedResponseMeta {
    current_page: number
    from: number
    last_page: number
    links: PaginatedResponseMetaLink[]
    path: string
    per_page: number
    to: number
    total: number
}

export interface PaginatedResponse<T> {
    data: T[]
    links: {
        first: string
        last: string | null
        next: string | null
        prev: string | null
    }
    meta: PaginatedResponseMeta
}

export interface FameCategory {
    id: number
    name: string
}

export interface Fame {
    id: number,
    name: string,
    category: FameCategory
    biography: string,
    achievement: string,
    price: number,
    sku: number
}