import { Component, Input, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { IProduct } from 'src/app/models/IProduct';
import { CartFacadeService } from 'src/app/NGRX/facades/cart.facade.service';
import { CategoryFacadeService } from 'src/app/NGRX/facades/category.facade.service';
import { DetailFacadeService } from 'src/app/NGRX/facades/detail.facade.service';
import { ProductFacadeService } from 'src/app/NGRX/facades/product.facade.service';
import { ProductByCategory } from 'src/app/NGRX/models/category.model';
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

  constructor(
    private categoryFacade: CategoryFacadeService,
    private store: Store<AppState>,
    private productFacade: ProductFacadeService,
    private detailFacade: DetailFacadeService
  ) { }

  categories$ = this.store.select(selectCategoryList)
  productsByCategory$ = this.store.select(selectProductsByCategory)
  productsByCategoryLoading$ = this.store.select(selectProductsByCategoryLoading)

  showProductDetail$ = this.detailFacade.detailOpened$

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
  productsByCategory: ProductByCategory[] = []


  ngOnInit(): void {

    this.productsByCategory$.pipe(
      switchMap((products) => {
        const product = [...products]
        this.productsByCategory = product
        return this.categories$
      })
    )
      .subscribe((categories) => {
        if (!this.productsByCategory.length) {
          this.categoryFacade.getProductsByCategory([...categories])
        }
      }
      )
  }

  onShowProductDetail() {
    this.detailFacade.openDetail()
  }

  onHideProductDetail() {
    this.detailFacade.closeDetail()
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
