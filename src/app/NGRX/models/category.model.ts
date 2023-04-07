import { ICategory } from "src/app/models/ICategory";
import { IProduct } from "src/app/models/IProduct";

export interface CategoryState {
    loadingCategories: boolean,
    loadingProducts: boolean,
    categories: ReadonlyArray<ICategory>,
    productsByCategory: ReadonlyArray<ProductByCategory>,
    category: ICategory
}

export interface ProductByCategory {
    category: string
    id: string
    items: ReadonlyArray<IProduct>
}

export interface isAvailable {
    isAvailable: boolean
}