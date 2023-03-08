import { createAction, props } from "@ngrx/store";
import { ICartProduct, IProduct } from "src/app/models/IProduct";

export const openCart = createAction(
    '[Cart] Open Cart',
    props<{ open: boolean }>()
)

export const closeCart = createAction(
    '[Cart] Close Cart',
    props<{ open: boolean }>()
)

export const addItem = createAction(
    '[Cart] Add item to Cart',
    props<{ item: IProduct }>()
)

export const removeItem = createAction(
    '[Cart] Remove item of Cart',
    props<{ id: string }>()
)

export const increaseItem = createAction(
    '[Cart] Increase item of Cart',
    props<{ id: string }>()
)

export const decreaseItem = createAction(
    '[Cart] Decrease item of Cart',
    props<{ id: string }>()
)

export const emptyCart = createAction(
    '[Cart] Emptying cart'
)

export const getCartOfCookie = createAction(
    '[Cart] Getting Cart of CookieStorage'
)

export const setCart = createAction(
    '[Cart] Setting Cart with CookieStorage',
    props<{ items: Array<ICartProduct> | [] }>()
)

export const getQuantityItems = createAction(
    '[Cart] Getting quantity of Items'
)

export const setQuantityItems = createAction(
    '[Cart] Setting quantity of Items',
    props<{ quantity: number }>()
)

export const getAmount = createAction(
    '[Cart] Getting amount of Items'
)

export const setAmount = createAction(
    '[Cart] Setting amount of Items',
    props<{ amount: number }>()
)
