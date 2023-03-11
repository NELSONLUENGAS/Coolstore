import { createReducer, on } from "@ngrx/store"
import { openSidebar } from "../actions/nav.action"
import { NavState } from "../models/nav.model"

export const initialState: NavState = {
    open: false
}

export const navReducer = createReducer(
    initialState,
    on(openSidebar, (state, { open }) => {
        return {
            ...state,
            open
        }
    }),
)