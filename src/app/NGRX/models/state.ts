import { ActionReducerMap } from "@ngrx/store";
import { cartReducer } from "../reducers/cart.reducer";
import { detailReducer } from "../reducers/detail.reducer";
import { categoryReducer } from "../reducers/category.reducer";
import { CartState } from "./cart.model";
import { DetailState } from "./detail.model";
import { CategoryState } from "./category.model";
import { ProductState } from "./product.model";
import { productReducer } from "../reducers/product.reducer";


export interface AppState {
    categories: CategoryState
    cart: CartState,
    detail: DetailState
    products: ProductState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    categories: categoryReducer,
    cart: cartReducer,
    detail: detailReducer,
    products: productReducer

}