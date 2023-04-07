import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowRight, faBarsStaggered, faShoppingCart, faStore, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { ICartProduct } from 'src/app/models/IProduct';
import { IUser } from 'src/app/models/IUsers';
import { CartFacadeService } from 'src/app/NGRX/facades/cart.facade.service';
import { CategoryFacadeService } from 'src/app/NGRX/facades/category.facade.service';
import { DetailFacadeService } from 'src/app/NGRX/facades/detail.facade.service';
import { NavFacadeService } from 'src/app/NGRX/facades/nav.facade.service';
import { AppState } from 'src/app/NGRX/models/state';
import { selectCategoryList, selectCategoryLoading } from 'src/app/NGRX/selectors/category.selector';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  clickedCart = false
  faShoppingCart = faShoppingCart
  faBars = faBarsStaggered;
  faClose = faTimes

  counter = 0
  sideMenuOpen = false
  user: IUser | null = null
  faCloseCircle = faTimesCircle
  faArrow = faArrowRight
  currentRoute = ""
  cartItems: ICartProduct[] = []


  constructor(
    private AuthService: AuthService,
    private CategoryService: CategoryService,
    private router: Router,
    private store: Store<AppState>,
    private cartFacade: CartFacadeService,
    private categoryFacade: CategoryFacadeService,
    private navFacade: NavFacadeService,
    private detailFacade: DetailFacadeService,
    private location: Location
  ) { }

  cartOpened$ = this.cartFacade.cartOpen$
  cartItems$ = this.cartFacade.cartItems$
  cartQuantity$ = this.cartFacade.cartQuantity$
  sidebarOpened$ = this.navFacade.sidebarOpened$
  categories$ = this.categoryFacade.getCategories$
  category$ = this.store.select(selectCategoryList)


  ngOnInit(): void {
    this.cartFacade.setCart()
    this.categoryFacade.loadCategories()
    this.cartFacade.setCartQuantity()

    this.AuthService.user$
      .pipe(
        switchMap((user) => {
          this.user = user
          return this.router.events
        }),
        switchMap(() => {
          const pathname = this.location.path().split('?')
          this.currentRoute = pathname[0]
          return this.category$
        }),
        switchMap(() => {
          return this.cartItems$
        })
      )
      .subscribe(
        (cart) => this.cartItems = cart
      )
  }

  handleSideMenuOpen() {
    this.navFacade.openSidebar()
    this.cartFacade.closeCart()
    this.detailFacade.closeDetail()
  }

  handleSideMenuClose() {
    this.navFacade.closeSidebar()
  }

  onClickedCart() {
    this.cartFacade.openCart()
    this.navFacade.closeSidebar()
    this.detailFacade.closeDetail()
  }

  closeCart() {
    this.cartFacade.closeCart()
  }

  onHideProductDetail() {
    this.detailFacade.closeDetail()
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
