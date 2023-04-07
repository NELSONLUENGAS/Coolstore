import { createAction, props } from "@ngrx/store"
import { IProduct } from "src/app/models/IProduct"

export const getProductChosen = createAction(
    '[Product] Getting Product Chosen',
    props<{ id: string }>()
)

export const setProductChosen = createAction(
    '[Product] Setting Product Chosen',
    props<{ product: IProduct }>()
)

export const GET_ALL = '[Product] Loading all products'
export const loadingAllProducts = createAction(
    GET_ALL,
    props<{ loading: boolean }>()
)
export const ALL_OBTAINED = '[Product] All products loaded'
export const allProductsLoaded = createAction(
    ALL_OBTAINED,
    props<{ loading: boolean, allProducts: IProduct[] }>()
)

export const GET_PRODUCT = '[Categories] Getting Product'
export const getProduct = createAction(
    GET_PRODUCT,
    props<{ id: string }>()
)

export const PRODUCT_OBTAINED = '[Categories] Product obtained'
export const ProductObtained = createAction(
    PRODUCT_OBTAINED,
    props<{ data: IProduct }>()
)

export const CREATE_PRODUCT = '[Categories] Creating new Product'
export const creatingProduct = createAction(
    CREATE_PRODUCT,
    props<{ data: Partial<IProduct> }>()
)

export const UPDATE_PRODUCT = '[Categories] Updating Product'
export const updatingProduct = createAction(
    UPDATE_PRODUCT,
    props<{ data: Partial<IProduct>, id: string }>()
)

export const DELETE_PRODUCT = '[Categories] Deleting Product'
export const deleteProduct = createAction(
    DELETE_PRODUCT,
    props<{ id: string }>()
)
