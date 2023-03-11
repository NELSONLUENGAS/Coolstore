import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/models/IProduct';
import { addItem, decreaseItem, getAmount, getCartOfCookie, getQuantityItems, increaseItem, openCart, removeItem } from '../actions/cart.action';
import { AppState } from '../models/state';
import { selectCart, selectCartAmount, selectCartQuantity, selectOpenCart } from '../selectors/cart.selector';

@Injectable({
  providedIn: 'root'
})
export class CartFacadeService {

  cartOpen$ = this.store.select(selectOpenCart)
  cartItems$ = this.store.select(selectCart)
  cartQuantity$ = this.store.select(selectCartQuantity)
  cartAmount$ = this.store.select(selectCartAmount)

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

  getAmount() {
    this.store.dispatch(getAmount())
  }

  removeItem(id: string) {
    this.store.dispatch(removeItem({ id: id }))
  }

  increaseItem(id: string) {
    this.store.dispatch(increaseItem({ id: id }))
  }

  decreaseItem(id: string) {
    this.store.dispatch(decreaseItem({ id: id }))
  }

}
