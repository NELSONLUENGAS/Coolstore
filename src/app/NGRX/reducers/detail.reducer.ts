import { createReducer, on } from "@ngrx/store";
import { openDetail, closeDetail } from "../actions/detail.action";
import { DetailState } from "../models/detail.model";



const initialState: DetailState = {
    open: false
}

export const detailReducer = createReducer(
    initialState,
    on(openDetail, (state, { open }) => {
        return {
            ...state,
            open
        }
    }),
    on(closeDetail, (state, { open }) => {
        return {
            ...state,
            open
        }
    }),
)