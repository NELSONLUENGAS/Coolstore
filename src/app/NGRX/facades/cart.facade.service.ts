import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { openCart } from '../actions/cart.action';
import { AppState } from '../models/state';
import { selectOpenCart } from '../selectors/cart.selector';

@Injectable({
  providedIn: 'root'
})
export class CartFacadeService {

  cartOpen$ = this.store.select(selectOpenCart)

  constructor(
    private store: Store<AppState>
  ) { }

  openCart() {
    this.store.dispatch(openCart({ open: true }))
  }

  closeCart() {
    this.store.dispatch(openCart({ open: false }))
  }
}
