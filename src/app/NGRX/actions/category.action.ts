import { createAction, props } from "@ngrx/store";
import { ICategory, IProduct } from "src/app/models/IProduct";
import { ProductByCategory } from "../models/category.model";

export const loadCategories = createAction(
    '[Categories] Loading Categories'
)

export const loadedCategories = createAction(
    '[Categories] Loaded Categories',
    props<{
        items: Array<ICategory>,
        loading: boolean
    }>()
)

export const loadProductsByCategory = createAction(
    '[Categories] Loading products by categories',
    props<{ items: ICategory[] }>()
)
export const loadedProductsByCategory = createAction(
    '[Categories] Loaded products by categories',
    props<{
        item: ProductByCategory,
        loading: boolean
    }>()
)