import { Component, Input } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { CartFacadeService } from 'src/app/NGRX/facades/cart.facade.service';
import { DetailFacadeService } from 'src/app/NGRX/facades/detail.facade.service';
import { NavFacadeService } from 'src/app/NGRX/facades/nav.facade.service';
import { ProductFacadeService } from 'src/app/NGRX/facades/product.facade.service';
import { ProductByCategory } from 'src/app/NGRX/models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {


  item: ProductByCategory = {
    category: '',
    id: '',
    items: []
  }

  @Input()
  set category(item: ProductByCategory) {
    this.item = item
  }

  faEye = faEye

  productChosen$ = this.productFacade.productChosen$

  constructor(
    private productFacade: ProductFacadeService,
    private detailFacade: DetailFacadeService,
    private cartFacade: CartFacadeService,
    private navFacade: NavFacadeService
  ) { }

  showDetail() {
    this.detailFacade.openDetail()
    this.cartFacade.closeCart()
    this.navFacade.closeSidebar()
  }
}
