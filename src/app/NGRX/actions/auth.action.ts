import { createAction, props } from "@ngrx/store";
import { IUserLogin } from "src/app/models/IAuth";
import { ICreateUser, IUser } from "src/app/models/IUsers";

export const createUser = createAction(
    '[Auth] Creating user',
    props<{ user: ICreateUser }>()
)

export const UserCreated = createAction(
    '[Auth] User created',
    props<{ user: IUser, registered: boolean }>()

)

export const loginRequest = createAction(
    '[Auth] User Login request',
    props<{ user: IUserLogin }>()
)

export const loginSuccess = createAction(
    '[Auth] User Login success',
    props<{ user: IUser, login: boolean }>()

)