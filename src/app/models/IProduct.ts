export interface IProduct {
    id: string
    title: string
    price: number
    description: string
    category: ICategory
    images: string[]
    taxes?: number
}

export interface ICategory  {
    id: string
    name: string
}

export interface ICreateProduct extends Omit<IProduct, 'id' | 'category'> {
    categoryId: string
}

export interface IUpdateProduct extends Partial<ICreateProduct> {}