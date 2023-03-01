import { createReducer, on } from "@ngrx/store";
import { openCart, closeCart } from "../actions/cart.action";
import { CartState } from "../models/cart.model";



const initialState: CartState = {
    open: false
}

export const cartReducer = createReducer(
    initialState,
    on(openCart, (state, { open }) => {
        return {
            ...state,
            open
        }
    }),
    on(closeCart, (state, { open }) => {
        return {
            ...state,
            open
        }
    }),
)