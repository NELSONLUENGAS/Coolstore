import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Array<IProduct> = []
  private MyCart =  new BehaviorSubject<Array<IProduct>>([])

  myCart$ = this.MyCart.asObservable()

  AddToCart(product: IProduct) {
    this.myShoppingCart.push(product)
    this.MyCart.next(this.myShoppingCart)
  }

  GetShoppingCart() {
    return this.myShoppingCart
  }

  GetTotalCart(){
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0)
  }
}
