import { createReducer, on } from "@ngrx/store"
import { ProductObtained, allProductsLoaded, loadingAllProducts, setProductChosen } from "../actions/product.action"
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
    },
    allProducts: [],
    loading: false,
    product: {
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
    on(loadingAllProducts, (state, { loading }) => {
        return {
            ...state,
            loading
        }
    }),
    on(allProductsLoaded, (state, { loading, allProducts }) => {
        return {
            ...state,
            loading,
            allProducts
        }
    }),
    on(ProductObtained, (state, { data }) => {
        return {
            ...state,
            product: data
        }
    }),
)