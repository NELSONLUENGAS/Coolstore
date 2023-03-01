import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/app/models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private myShoppingCart: Array<IProduct> = []
  private cartOpened = false
  private Cart = new BehaviorSubject<Array<IProduct>>([])
  private CartOpen = new BehaviorSubject<boolean>(false)

  Cart$ = this.Cart.asObservable()
  CartOpened$ = this.CartOpen.asObservable()


  Add(product: IProduct) {
    this.myShoppingCart.push(product)
    this.Cart.next(this.myShoppingCart)
  }

  Open() {
    this.cartOpened = !this.cartOpened
    this.CartOpen.next(this.cartOpened)
  }

  GetProducts() {
    return this.myShoppingCart
  }

  GetTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0)
  }
}