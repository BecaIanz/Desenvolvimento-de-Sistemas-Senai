export interface registerProductDTO{
    name: string
    description: string
    price: number
    stock: number 
    category: string
}

export interface findProductDTO{
    id?: string
    name?: string
    category?: string
    minPrice?: number
    maxPrice?: number
}