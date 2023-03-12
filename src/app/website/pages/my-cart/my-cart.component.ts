import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { ICartProduct } from 'src/app/models/IProduct';
import { CartFacadeService } from 'src/app/NGRX/facades/cart.facade.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  cartItems: ICartProduct[] = []
  idSelected = ''
  //Observables
  cartItemsQuantity$ = this.cartFacade.cartQuantity$
  cartAmount$ = this.cartFacade.cartAmount$

  //icons
  faBasket = faTrash
  faBack = faArrowLeft

  constructor(
    private cartFacade: CartFacadeService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.cartFacade.getAmount()
    this.cartFacade.cartItems$
      .subscribe(cart => this.cartItems = cart)
  }

  increaseItem(id: string) {
    this.cartFacade.increaseItem(id)
    this.cartFacade.setCart()
  }

  decreaseItem(id: string) {
    this.cartFacade.decreaseItem(id)
    this.cartFacade.setCart()
  }

  showConfirm(id: string) {
    this.idSelected = id
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }

  onConfirm() {
    this.cartFacade.removeItem(this.idSelected)
    this.cartFacade.setCart()
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }

  clear() {
    this.messageService.clear();
  }
}
