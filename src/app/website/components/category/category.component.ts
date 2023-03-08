import { Component, Input } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
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
    private productFacade: ProductFacadeService
  ){}

  
}
