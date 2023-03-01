export interface ProductModel {
    id: string
    title: string
    price: number
    description: string
    // category: ICategory
    images: string[]
    taxes?: number
}