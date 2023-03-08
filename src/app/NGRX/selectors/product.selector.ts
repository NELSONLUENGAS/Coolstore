import { createSelector } from "@ngrx/store"
import { ProductState } from "../models/product.model"
import { AppState } from "../models/state"

export const selectProductState = (state: AppState) => state.products

export const selectProductChosen = createSelector(
    selectProductState,
    (state: ProductState) => state.productChosen
)