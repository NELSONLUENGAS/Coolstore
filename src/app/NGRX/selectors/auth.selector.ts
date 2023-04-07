import { createSelector } from "@ngrx/store";
import { AuthState } from "../models/auth.model";
import { AppState } from "../models/state";

export const selectAuthState = (state: AppState) => state.auth

export const selectUser = createSelector(
    selectAuthState,
    (state: AuthState) => state.user
)

export const selectUserRegistered = createSelector(
    selectAuthState,
    (state: AuthState) => state.userRegistered
)

export const selectUserLogin = createSelector(
    selectAuthState,
    (state: AuthState) => state.userLogin
)