import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faBarsStaggered, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { ICategory } from 'src/app/models/IProduct';
import { IUser } from 'src/app/models/IUsers';
import { loadProducts } from 'src/app/NGRX/actions/product.action';
import { CartFacadeService } from 'src/app/NGRX/facades/cart.facade.service';
import { selectProductLoading } from 'src/app/NGRX/selectors/product.selector';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
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


  constructor(
    private StoreService: StoreService,
    private AuthService: AuthService,
    private CategoryService: CategoryService,
    private router: Router,
    private CartService: CartService,
    private store: Store<any>,
    private cartFacade: CartFacadeService
  ) { }

  loading$: Observable<boolean> = new Observable()

  ngOnInit(): void {
    this.loading$ = this.store.select(selectProductLoading)
    this.store.dispatch(loadProducts())
    this.StoreService.myCart$
      .pipe(
        switchMap((products) => {
          this.counter = products.length
          return this.AuthService.user$
        }),
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
