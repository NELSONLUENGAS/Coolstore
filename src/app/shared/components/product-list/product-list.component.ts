import { Component, Input, OnInit } from '@angular/core';
import { ICreateProduct, IProduct, IUpdateProduct } from 'src/app/models/IProduct'
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import { faTimesCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { switchMap } from 'rxjs';
import SwiperCore, { Pagination } from 'swiper';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartFacadeService } from 'src/app/NGRX/facades/cart.facade.service';



SwiperCore.use([Pagination]);

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Array<IProduct> = []
  @Input()
  set productId(id: string | null) {
    id && this.onShowDetail(id)
  }

  myShoppingCart: Array<IProduct> = []
  totalShoppingCart = 0
  faClose = faTimesCircle
  faArrow = faArrowRight
  showProductDetail = false
  cartOpened = false

  productChosen: IProduct = {
    id: '',
    title: '',
    price: 0,
    description: '',
    category: {
      id: '',
      name: ''
    },
    images: []
  }

  cartOpened$ = this.cartFacade.cartOpen$

  constructor(
    private StoreService: StoreService,
    private ProductsService: ProductsService,
    private CartService: CartService,
    private cartFacade: CartFacadeService
  ) {
    this.myShoppingCart = this.StoreService.GetShoppingCart()
  }

  ngOnInit(): void {
    this.CartService.CartOpened$
      .subscribe(bool => this.cartOpened = bool)
  }
  onAddToShoppingCart(product: IProduct) {
    this.StoreService.AddToCart(product)
    this.totalShoppingCart = this.StoreService.GetTotalCart()
  }

  onShowProductDetail() {
    !this.cartOpened ? this.showProductDetail = true : this.showProductDetail = false
  }

  onHideProductDetail() {
    this.showProductDetail = false
  }

  onShowDetail(id: string) {
    this.ProductsService.GetProduct(id)
      .subscribe(data => {
        this.productChosen = data
        this.onShowProductDetail()
      })
  }

  onCreateNewProduct() {
    const product: ICreateProduct = {
      title: 'New product',
      price: 100,
      description: 'This is the new Product Created',
      categoryId: '2',
      images: ['https://placeimg.com/640/480/any',
        'https://placeimg.com/640/480/any',
        'https://placeimg.com/640/480/any']
    }
    this.ProductsService.Create(product)
      .subscribe(data => {
        this.products.unshift(data)
      })
  }

  onUpdateProduct() {
    const product: IUpdateProduct = {
      title: 'Gorgeous Fresh',
    }
    this.ProductsService.Update(this.productChosen.id, product)
      .subscribe(data => {
        const productIndex = this.products.findIndex(item => item.id === this.productChosen.id)
        this.products[productIndex] = data
        this.productChosen = data
      })
  }

  onDeleteProduct() {
    const id = this.productChosen.id
    this.ProductsService.Delete(id)
      .subscribe(() => {
        this.products = this.products.filter(product => product.id !== id)
        this.onHideProductDetail()
      })
  }

  readAndUpdate(id: string) {
    this.ProductsService.GetProduct(id)
      .pipe(
        switchMap((product) => {
          return this.ProductsService.Update(product.id, { title: 'newTitleCange' })
        })
      )
      .subscribe(data => {
        console.log(data);

      })
  }

  fetchReadAndUpdate() {
    const productUpdate: IUpdateProduct = {
      title: 'Changing name',
    }
    this.ProductsService.FetchReadAndUpdte(this.productChosen.id, productUpdate)
  }
}
