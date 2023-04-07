import { createSelector } from "@ngrx/store"
import { ProductState } from "../models/product.model"
import { AppState } from "../models/state"

export const selectProductState = (state: AppState) => state.products

export const selectProductChosen = createSelector(
    selectProductState,
    (state: ProductState) => state.productChosen
)

export const selectProductsLoading = createSelector(
    selectProductState,
    (state: ProductState) => state.loading
)

export const selectAllProducts = createSelector(
    selectProductState,
    (state: ProductState) => state.allProducts
)

export const selectProduct = createSelector(
    selectProductState,
    (state: ProductState) => state.product
)