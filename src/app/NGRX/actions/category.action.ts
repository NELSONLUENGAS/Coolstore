import { createAction, props } from "@ngrx/store";
import { ProductByCategory } from "../models/category.model";
import { ICategory } from "src/app/models/ICategory";

export const LOAD_CATEGORIES = '[Categories] Loading categories'
export const loadCategories = createAction(
    LOAD_CATEGORIES
)

export const CATEGORIES_LOADED = '[Categories] Loaded Categories'
export const loadedCategories = createAction(
    CATEGORIES_LOADED,
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

export const GET_CATEGORY = '[Categories] Getting Category'
export const getCategory = createAction(
    GET_CATEGORY,
    props<{ id: string }>()
)

export const CATEGORY_OBTAINED = '[Categories] Category obtained'
export const categoryObtained = createAction(
    CATEGORY_OBTAINED,
    props<{ data: ICategory }>()
)

export const CREATE_CATEGORY = '[Categories] Creating new Category'
export const creatingCategory = createAction(
    CREATE_CATEGORY,
    props<{ data: Partial<ICategory> }>()
)

export const UPDATE_CATEGORY = '[Categories] Updating Category'
export const updatingCategory = createAction(
    UPDATE_CATEGORY,
    props<{ data: Partial<ICategory>, id: string }>()
)

export const DELETE_CATEGORY = '[Categories] Deleting Category'
export const deleteCategory = createAction(
    DELETE_CATEGORY,
    props<{ id: string }>()
)