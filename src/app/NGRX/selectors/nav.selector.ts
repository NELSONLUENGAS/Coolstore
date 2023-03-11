import { createSelector } from "@ngrx/store";
import { NavState } from "../models/nav.model";
import { AppState } from "../models/state";

export const selectNavState = (state: AppState) => state.nav

export const selectSidebarOpen =
    createSelector(
        selectNavState,
        (state: NavState) => state.open
    )