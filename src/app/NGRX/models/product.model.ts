import { ICategory } from "src/app/models/IProduct";

export interface ProductState {
    loading: boolean,
    items: ReadonlyArray<ICategory>
}