import { ActionReducerMap } from "@ngrx/store";
import { cartReducer } from "../reducers/cart.reducer";
import { detailReducer } from "../reducers/detail.reducer";
import { productsReducer } from "../reducers/product.reducer";
import { CartState } from "./cart.model";
import { DetailState } from "./detail.model";
import { ProductState } from "./product.model";


export interface AppState {
    products: ProductState
    cart: CartState,
    detail: DetailState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    products: productsReducer,
    cart: cartReducer,
    detail: detailReducer
}