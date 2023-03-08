import { ICategory, IProduct } from "src/app/models/IProduct";

export interface CategoryState {
    loadingCategories: boolean,
    loadingProducts: boolean,
    categories: ReadonlyArray<ICategory>,
    productsByCategory: ReadonlyArray<ProductByCategory>
}

export interface ProductByCategory {
    category: string
    id: string
    items: ReadonlyArray<IProduct>
}