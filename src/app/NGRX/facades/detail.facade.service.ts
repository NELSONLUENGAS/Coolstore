import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { openDetail } from '../actions/detail.action';
import { AppState } from '../models/state';
import { selectOpenDetail } from '../selectors/detail.seletor';

@Injectable({
  providedIn: 'root'
})
export class DetailFacadeService {

  constructor(
    private store: Store<AppState>
  ) { }

  detailOpened$ = this.store.select(selectOpenDetail)

  openDetail() {
    this.store.dispatch(openDetail({ open: true }))
  }

  closeDetail() {
    this.store.dispatch(openDetail({ open: false }))
  }
}
