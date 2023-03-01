import { createSelector } from "@ngrx/store";
import { CartState } from "../models/cart.model";
import { AppState } from "../models/state";

export const selectCartState = (state: AppState) => state.cart

export const selectOpenCart = createSelector(
    selectCartState,
    (state: CartState) => state.open
)