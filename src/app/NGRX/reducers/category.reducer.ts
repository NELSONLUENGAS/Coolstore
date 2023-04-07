import { createReducer, on } from "@ngrx/store";
import { loadedCategories, loadCategories, loadProductsByCategory, loadedProductsByCategory, categoryObtained } from "../actions/category.action";
import { CategoryState } from "../models/category.model";



export const initialState: CategoryState = {
    loadingCategories: false,
    loadingProducts: false,
    categories: [],
    productsByCategory: [],
    category: {
        id: '',
        name: '',
        image: ''
    }
}

export const categoryReducer = createReducer(
    initialState,
    on(loadCategories, (state) => {
        return {
            ...state,
            loadingCategories: true
        }
    }),
    on(loadedCategories, (state, { items, loading }) => {
        return {
            ...state,
            categories: items,
            loadingCategories: loading
        }
    }),
    on(loadProductsByCategory, (state) => {
        return {
            ...state,
            loadingProducts: true
        }
    }),
    on(loadedProductsByCategory, (state, { loading, item }) => {
        return {
            ...state,
            productsByCategory: [...state.productsByCategory, item],
            loadingProducts: loading
        }
    }),
    on(categoryObtained, (state, { data }) => {
        return {
            ...state,
            category: data
        }
    }),
)