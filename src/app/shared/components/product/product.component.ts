import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons';

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

  @Output() addProductToCart = new EventEmitter<IProduct>()

  faAddShoppingCart = faCartPlus
  faEye = faEye


  handleAddToShoppingCart() {
    this.addProductToCart.emit(this.product)
  }
}
