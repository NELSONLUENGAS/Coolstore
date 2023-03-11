import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { openSidebar } from '../actions/nav.action';
import { AppState } from '../models/state';
import { selectSidebarOpen } from '../selectors/nav.selector';

@Injectable({
  providedIn: 'root'
})
export class NavFacadeService {

  constructor(
    private store: Store<AppState>,
  ) { }

  sidebarOpened$ = this.store.select(selectSidebarOpen)

  openSidebar() {
    this.store.dispatch(openSidebar({ open: true }))
  }

  closeSidebar() {
    this.store.dispatch(openSidebar({ open: false }))
  }
}
