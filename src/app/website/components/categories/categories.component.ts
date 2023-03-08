import { Component, Input, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/models/IProduct';
import { CartFacadeService } from 'src/app/NGRX/facades/cart.facade.service';
import { CategoryFacadeService } from 'src/app/NGRX/facades/category.facade.service';
import { ProductFacadeService } from 'src/app/NGRX/facades/product.facade.service';
import { AppState } from 'src/app/NGRX/models/state';
import { selectCategoryList, selectProductsByCategory, selectProductsByCategoryLoading } from 'src/app/NGRX/selectors/category.selector';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input()
  set productId(id: string | null) {
    id && this.onShowDetail(id)
  }

  showProductDetail = false
  cartOpened = false

  constructor(
    private categoryFacade: CategoryFacadeService,
    private store: Store<AppState>,
    private productFacade: ProductFacadeService,
    private cartFacade: CartFacadeService
  ) { }

  categories$ = this.store.select(selectCategoryList)
  productsByCategory$ = this.store.select(selectProductsByCategory)
  productsByCategoryLoading$ = this.store.select(selectProductsByCategoryLoading)
  cartOpened$ = this.cartFacade.cartOpen$

  productChosen: IProduct = {
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
  faClose = faTimesCircle


  ngOnInit(): void {
    this.categories$.subscribe((categories) => this.categoryFacade.getProductsByCategory([...categories])
    )
  }

  onShowProductDetail() {
    !this.cartOpened ? this.showProductDetail = true : this.showProductDetail = false
  }

  onHideProductDetail() {
    this.showProductDetail = false
  }

  onShowDetail(id: string) {
    this.productFacade.chooseProduct(id)
    this.productFacade.productChosen$
      .subscribe((product) => {
        this.productChosen = product
        this.onShowProductDetail()
      })
  }
}
