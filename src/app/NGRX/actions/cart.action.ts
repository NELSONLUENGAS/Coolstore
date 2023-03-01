import { createAction, props } from "@ngrx/store";

export const openCart = createAction(
    '[Cart] Open Cart',
    props<{ open: boolean }>()
)
export const closeCart = createAction(
    '[Cart] Close Cart',
    props<{ open: boolean }>()
)