import { IUser } from "src/app/models/IUsers";

export interface AuthState {
    user: IUser
    userRegistered: boolean
    userLogin: boolean
}