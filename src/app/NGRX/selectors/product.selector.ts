import { createSelector } from "@ngrx/store";
import { ProductState } from "../models/product.model";
import { AppState } from "../models/state";

export const selectProductsState = (state: AppState) => state.products

export const selectProductList = createSelector(
    selectProductsState,
    (state: ProductState) => state.items
)

export const selectProductLoading = createSelector(
    selectProductsState,
    (state: ProductState) => state.loading
)