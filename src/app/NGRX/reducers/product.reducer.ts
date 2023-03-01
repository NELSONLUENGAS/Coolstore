import { createReducer, on } from "@ngrx/store";
import { loadedProducts, loadProducts } from "../actions/product.action";
import { ProductState } from "../models/product.model";



export const initialState: ProductState = {
    loading: false,
    items: []
}

export const productsReducer = createReducer(
    initialState,
    on(loadProducts, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(loadedProducts, (state, { items, loading }) => {
        return {
            ...state,
            items,
            loading
        }
    })
)