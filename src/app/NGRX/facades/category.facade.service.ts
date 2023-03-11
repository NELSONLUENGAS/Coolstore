import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICategory } from 'src/app/models/IProduct';
import { loadCategories, loadProductsByCategory } from '../actions/category.action';
import { AppState } from '../models/state';
import { selectProductsByCategory } from '../selectors/category.selector';

@Injectable({
  providedIn: 'root'
})
export class CategoryFacadeService {

  constructor(
    private store: Store<AppState>
  ) { }

  getCategories$ = this.store.select(selectProductsByCategory)

  loadCategories() {
    this.store.dispatch(loadCategories())
  }
  getProductsByCategory(categories: ICategory[]) {
    this.store.dispatch(loadProductsByCategory({ items: categories }))
  }

}
