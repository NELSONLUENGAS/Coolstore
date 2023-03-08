import { createReducer, on } from "@ngrx/store"
import { setProductChosen } from "../actions/product.action"
import { ProductState } from "../models/product.model"


export const initialState: ProductState = {
    productChosen: {
        id: '',
        title: '',
        price: 0,
        description: '',
        category: {
            id: '',
            name: ''
        },
        images: []
    }
}

export const productReducer = createReducer(
    initialState,
    on(setProductChosen, (state, { product }) => {
        return {
            ...state,
            productChosen: product
        }
    }),
)