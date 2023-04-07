import { IProduct } from "src/app/models/IProduct";

export interface ProductState {
    productChosen: IProduct
    product: IProduct
    loading: boolean
    allProducts: IProduct[]
}