import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/models/IProduct';
import { addItem, getCartOfCookie, getQuantityItems, openCart } from '../actions/cart.action';
import { AppState } from '../models/state';
import { selectCart, selectCartQuantity, selectOpenCart } from '../selectors/cart.selector';

@Injectable({
  providedIn: 'root'
})
export class CartFacadeService {

  cartOpen$ = this.store.select(selectOpenCart)
  cartItems$ = this.store.select(selectCart)
  cartQunatity$ = this.store.select(selectCartQuantity)

  constructor(
    private store: Store<AppState>
  ) { }

  openCart() {
    this.store.dispatch(openCart({ open: true }))
  }

  closeCart() {
    this.store.dispatch(openCart({ open: false }))
  }

  addToCart(item: IProduct) {
    this.store.dispatch(addItem({ item }))
  }

  setCart() {
    this.store.dispatch(getCartOfCookie())
  }

  setCartQuantity() {
    this.store.dispatch(getQuantityItems())
  }


}
