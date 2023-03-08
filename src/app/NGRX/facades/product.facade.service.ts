import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProductChosen } from '../actions/product.action';
import { AppState } from '../models/state';
import { selectProductChosen } from '../selectors/product.selector';

@Injectable({
  providedIn: 'root'
})
export class ProductFacadeService {

  constructor(
    private store: Store<AppState>
  ) { }

  productChosen$ = this.store.select(selectProductChosen)

  chooseProduct(id: string) {
    this.store.dispatch(getProductChosen({ id }))
  }
}
