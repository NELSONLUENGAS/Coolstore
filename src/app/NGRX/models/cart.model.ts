import { ICartProduct } from "src/app/models/IProduct"

export interface CartState {
    open: boolean
    items: Array<ICartProduct>
    amount: number
    quantity: number
}