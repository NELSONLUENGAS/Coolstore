import { createReducer, on } from "@ngrx/store";
import { ICartProduct } from "src/app/models/IProduct";
import { openCart, closeCart, addItem, removeItem, increaseItem, decreaseItem, setCart, setQuantityItems, setAmount } from "../actions/cart.action";
import { CartState } from "../models/cart.model";



const initialState: CartState = {
    open: false,
    items: [],
    quantity: 0,
    amount: 0
}

export const cartReducer = createReducer(
    initialState,
    on(openCart, (state, { open }) => {
        return {
            ...state,
            open
        }
    }),
    on(closeCart, (state, { open }) => {
        return {
            ...state,
            open
        }
    }),
    on(setCart, (state, { items }) => {
        return {
            ...state,
            items
        }
    }),
    on(addItem, (state, { item }) => {

        let itemExisting = state.items.find(el => Number(el.id) === Number(item.id))

        if (itemExisting) {

            let newItem = {
                ...itemExisting,
            }
            newItem.quantity += 1

            let currentState = [...state.items]
            currentState[currentState.findIndex(el => item.id === el.id)] = newItem

            return {
                ...state,
                items: currentState
            }
        } else {
            const newItem: ICartProduct = {
                ...item,
                quantity: 1
            }

            return {
                ...state,
                items: [...state.items, newItem]
            }
        }
    }),
    on(removeItem, (state, { id }) => {
        let newState = state.items
        newState.filter(el => el.id !== id)

        return {
            ...state,
            items: newState
        }
    }),
    on(increaseItem, (state, { id }) => {
        let increaseProduct = state.items[state.items.findIndex(el => Number(el.id) === Number(id))]
        increaseProduct.quantity += 1
        state.items[state.items.findIndex(el => Number(el.id) === Number(id))] = increaseProduct

        return {
            ...state
        }
    }),
    on(decreaseItem, (state, { id }) => {
        let decreaseProduct = state.items[state.items.findIndex(el => Number(el.id) === Number(id))]
        if (decreaseProduct.quantity > 1) {
            decreaseProduct.quantity -= 1
            state.items[state.items.findIndex(el => Number(el.id) === Number(id))] = decreaseProduct
        }
        return {
            ...state
        }
    }),
    on(setQuantityItems, (state, { quantity }) => {
        return quantity > 0 ?
            {
                ...state,
                quantity
            }
            :
            {
                ...state,
            }
    }),
    on(setAmount, (state, { amount }) => {
        return amount > 0 ?
            {
                ...state,
                amount
            }
            :
            {
                ...state,
            }
    }),
)

