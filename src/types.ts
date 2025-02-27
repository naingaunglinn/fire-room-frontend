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
    sku: number,
    inCart: boolean,
}

export interface CartData {
    id : number,
    name: string,
    biography: string,
    price: number,
}

export interface DrawerSize {
    size: "md" | "full" | "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined
}