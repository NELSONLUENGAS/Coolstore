import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight, faBarsStaggered, faShoppingCart, faStore, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { ICategory } from 'src/app/models/IProduct';
import { IUser } from 'src/app/models/IUsers';
import { loadCategories } from 'src/app/NGRX/actions/category.action';
import { CartFacadeService } from 'src/app/NGRX/facades/cart.facade.service';
import { CategoryFacadeService } from 'src/app/NGRX/facades/category.facade.service';
import { AppState } from 'src/app/NGRX/models/state';
import { selectCategoryLoading } from 'src/app/NGRX/selectors/category.selector';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  clickedCart = false
  faBars = faBarsStaggered;
  faShoppingCart = faShoppingCart
  faClose = faTimes
  categories: ICategory[] | null = null

  counter = 0
  sideMenuOpen = false
  user: IUser | null = null
  faCloseCircle = faTimesCircle
  faArrow = faArrowRight
  faStore = faStore


  constructor(
    private AuthService: AuthService,
    private CategoryService: CategoryService,
    private router: Router,
    private store: Store<AppState>,
    private cartFacade: CartFacadeService,
    private categoryFacade: CategoryFacadeService
  ) { }

  loading$: Observable<boolean> = new Observable()
  cartOpened$ = this.cartFacade.cartOpen$
  cartItems$ = this.cartFacade.cartItems$
  cartQuantity$ = this.cartFacade.cartQunatity$


  ngOnInit(): void {
    this.loading$ = this.store.select(selectCategoryLoading)
    this.cartFacade.setCart()
    this.categoryFacade.loadCategories()
    this.cartFacade.setCartQuantity()

    this.AuthService.user$
      .pipe(
        switchMap((user) => {
          this.user = user
          return this.CategoryService.GetAll()
        })
      )
      .subscribe(categories => {
        this.categories = categories
      })
  }

  handleSideMenuOpen() {
    this.sideMenuOpen = !this.sideMenuOpen
  }

  onClickedCart() {
    this.cartFacade.openCart()
  }

  closeCart() {
    this.cartFacade.closeCart()
  }

  login() {
    this.AuthService.Login('Carla@gmail.com', '12345')
      .subscribe(() => this.router.navigate(['/profile']))
  }

  Logout() {
    this.AuthService.Logout()
    this.user = null
    this.router.navigate(['/home'])
  }
}
