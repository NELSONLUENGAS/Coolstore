import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { creatingProduct, deleteProduct, getProduct, getProductChosen, loadingAllProducts, updatingProduct } from '../actions/product.action';
import { AppState } from '../models/state';
import { selectAllProducts, selectProduct, selectProductChosen, selectProductsLoading } from '../selectors/product.selector';
import { IProduct } from 'src/app/models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductFacadeService {

  constructor(
    private store: Store<AppState>
  ) { }

  productChosen$ = this.store.select(selectProductChosen)
  productsLoading$ = this.store.select(selectProductsLoading)
  allProducts$ = this.store.select(selectAllProducts)
  product$ = this.store.select(selectProduct)

  chooseProduct(id: string) {
    this.store.dispatch(getProductChosen({ id }))
  }

  loadAllProducts(loading: boolean) {
    this.store.dispatch(loadingAllProducts({ loading }))
  }

  get(id: string) {
    this.store.dispatch(getProduct({ id }))
  }

  create(data: Partial<IProduct>) {
    this.store.dispatch(creatingProduct({ data }))
  }

  update(data: Partial<IProduct>, id: string) {
    this.store.dispatch(updatingProduct({ id, data }))
  }

  delete(id: string) {
    this.store.dispatch(deleteProduct({ id }))
  }
}
