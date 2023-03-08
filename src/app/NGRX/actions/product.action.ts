import { createAction, props } from "@ngrx/store"
import { IProduct } from "src/app/models/IProduct"

export const getProductChosen = createAction(
    '[Product] Getting Product Chosen',
    props<{ id: string }>()
)

export const setProductChosen = createAction(
    '[Product] Setting Product Chosen',
    props<{ product: IProduct }>()
)
