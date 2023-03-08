import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ICartProduct } from 'src/app/models/IProduct';
import { CartFacadeService } from 'src/app/NGRX/facades/cart.facade.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  cartItems: ICartProduct[] = []
  //Observables
  cartItemsQuantity$ = this.cartFacade.cartQunatity$

  //icons
  faBasket = faTrash

  constructor(
    private cartFacade: CartFacadeService
  ) { }

  ngOnInit(): void {
    this.cartFacade.cartItems$.subscribe(cart => this.cartItems = cart)
  }
}
