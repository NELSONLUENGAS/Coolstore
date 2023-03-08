import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { CartFacadeService } from 'src/app/NGRX/facades/cart.facade.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: IProduct = {
    id: '',
    title: '',
    price: 0,
    description: '',
    category: {
      id: '',
      name: ''
    },
    images: []
  }

  faAddShoppingCart = faCartPlus
  faEye = faEye

  constructor(
    private cartFacade: CartFacadeService
  ) { }

  handleAddToShoppingCart() {
    this.cartFacade.addToCart(this.product)
  }

}
