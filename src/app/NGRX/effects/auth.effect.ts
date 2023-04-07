import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { IUserLogin } from "src/app/models/IAuth";
import { ICreateUser } from "src/app/models/IUsers";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { AppState } from "../models/state";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private userService: UsersService,
        private authService: AuthService

    ) { }

    createUser$ = createEffect(() => this.actions$.pipe(
        ofType('[Auth] Creating user'),
        exhaustMap(({ user }: { user: ICreateUser }) => {
            return this.userService.Create(user)
                .pipe(
                    map((user) => ({
                        type: '[Auth] User created',
                        user,
                        registered: true
                    })),
                    catchError((error) => {
                        console.log(error)
                        return EMPTY
                    })
                )
        })
    ))

    userLogin$ = createEffect(() => this.actions$.pipe(
        ofType('[Auth] User Login request'),
        exhaustMap(({ user }: { user: IUserLogin }) => {
            return this.authService.Login(user.email, user.password)
                .pipe(
                    map((user) => ({
                        type: '[Auth] User Login success',
                        user,
                        login: true
                    })),
                    catchError((error) => {
                        console.log(error)
                        return EMPTY
                    })
                )
        })
    ))
}