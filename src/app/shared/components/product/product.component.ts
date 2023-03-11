import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { CartFacadeService } from 'src/app/NGRX/facades/cart.facade.service';
import { DetailFacadeService } from 'src/app/NGRX/facades/detail.facade.service';
import { NavFacadeService } from 'src/app/NGRX/facades/nav.facade.service';

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
    private cartFacade: CartFacadeService,
    private detailFacade: DetailFacadeService,
    private navFacade: NavFacadeService
  ) { }

  handleAddToShoppingCart() {
    this.cartFacade.addToCart(this.product)
  }

  showDetail() {
    this.detailFacade.openDetail()
    this.cartFacade.closeCart()
    this.navFacade.closeSidebar()
  }
}
