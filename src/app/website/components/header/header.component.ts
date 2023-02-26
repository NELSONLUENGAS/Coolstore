import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBarsStaggered, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'
import { switchMap } from 'rxjs';
import { ICategory } from 'src/app/models/IProduct';
import { IUser } from 'src/app/models/IUsers';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
    private router: Router
  ) { }

  ngOnInit(): void {
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
