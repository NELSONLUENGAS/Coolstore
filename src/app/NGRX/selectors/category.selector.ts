import { createSelector } from "@ngrx/store";
import { CategoryState } from "../models/category.model";
import { AppState } from "../models/state";

export const selectCategoryState = (state: AppState) => state.categories

export const selectCategoryList = createSelector(
    selectCategoryState,
    (state: CategoryState) => state.categories
)

export const selectCategoryLoading = createSelector(
    selectCategoryState,
    (state: CategoryState) => state.loadingCategories
)

export const selectProductsByCategory = createSelector(
    selectCategoryState,
    (state: CategoryState) => state.productsByCategory
)

export const selectProductsByCategoryLoading = createSelector(
    selectCategoryState,
    (state: CategoryState) => state.loadingProducts
)