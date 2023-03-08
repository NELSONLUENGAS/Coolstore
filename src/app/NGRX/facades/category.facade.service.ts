import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICategory } from 'src/app/models/IProduct';
import { loadCategories, loadProductsByCategory } from '../actions/category.action';
import { AppState } from '../models/state';

@Injectable({
  providedIn: 'root'
})
export class CategoryFacadeService {

  constructor(
    private store: Store<AppState>
  ) { }

  loadCategories() {
    this.store.dispatch(loadCategories())
  }
  getProductsByCategory(categories: ICategory[]) {
    this.store.dispatch(loadProductsByCategory({ items: categories }))
  }
}
