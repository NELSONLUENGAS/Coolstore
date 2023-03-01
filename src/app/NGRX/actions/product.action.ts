import { createAction, props } from "@ngrx/store";
import { ProductModel } from "src/app/core/models/product";
import { ICategory } from "src/app/models/IProduct";

export const loadProducts = createAction(
    '[Products] Loading products'
)

export const loadedProducts = createAction(
    '[Products] Loaded products',
    props<{
        items: Array<ICategory>,
        loading: boolean
    }>()
)