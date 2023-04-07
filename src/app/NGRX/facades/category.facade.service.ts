import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { creatingCategory, deleteCategory, getCategory, loadCategories, loadProductsByCategory, updatingCategory } from '../actions/category.action';
import { AppState } from '../models/state';
import { selectCategory, selectCategoryList, selectCategoryLoading, selectProductsByCategory } from '../selectors/category.selector';
import { ICategory } from 'src/app/models/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryFacadeService {

  constructor(
    private store: Store<AppState>
  ) { }

  getCategories$ = this.store.select(selectProductsByCategory)
  getAll$ = this.store.select(selectCategoryList)
  loading$ = this.store.select(selectCategoryLoading)
  category$ = this.store.select(selectCategory)

  loadCategories() {
    this.store.dispatch(loadCategories())
  }
  getProductsByCategory(categories: ICategory[]) {
    this.store.dispatch(loadProductsByCategory({ items: categories }))
  }

  get(id: string) {
    this.store.dispatch(getCategory({ id }))
  }

  create(data: Partial<ICategory>) {
    this.store.dispatch(creatingCategory({ data }))
  }

  update(data: Partial<ICategory>, id: string) {
    this.store.dispatch(updatingCategory({ id, data }))
  }

  delete(id: string) {
    this.store.dispatch(deleteCategory({ id }))
  }

}
