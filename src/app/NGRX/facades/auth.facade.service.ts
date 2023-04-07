import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUserLogin } from 'src/app/models/IAuth';
import { ICreateUser } from 'src/app/models/IUsers';
import { createUser, loginRequest } from '../actions/auth.action';
import { AppState } from '../models/state';
import { selectUser, selectUserLogin, selectUserRegistered } from '../selectors/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  userRegistered$ = this.store.select(selectUser)
  userRegisteredState$ = this.store.select(selectUserRegistered)
  userLogin$ = this.store.select(selectUserLogin)

  constructor(
    private store: Store<AppState>
  ) { }

  createUser(user: ICreateUser) {
    this.store.dispatch(createUser({ user: user }))
  }

  login(user: IUserLogin) {
    this.store.dispatch(loginRequest({user: user}))
  }
}
