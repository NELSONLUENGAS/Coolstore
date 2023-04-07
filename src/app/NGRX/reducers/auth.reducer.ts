import { createReducer, on } from "@ngrx/store";
import { loginSuccess, UserCreated } from "../actions/auth.action";
import { AuthState } from "../models/auth.model";

const initialState: AuthState = {
    user: {
        id: '',
        name: '',
        email: '',
        password: '',
        avatar: '',
        role: undefined
    },
    userRegistered: false,
    userLogin: false
}

export const authReducer = createReducer(
    initialState,
    on(UserCreated, (state, { user, registered }) => {
        return {
            ...state,
            user,
            userRegistered: registered
        }
    }),
    on(loginSuccess, (state, { user, login }) => {
        return {
            ...state,
            user,
            userLogin: login
        }
    }),
)