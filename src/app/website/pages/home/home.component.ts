import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { IProduct } from 'src/app/models/IProduct';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  limit = 10
  offset = 0
  products: Array<IProduct> = []
  productId: string | null = null

  constructor(
    private ProductsService: ProductsService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.ProductsService.GetAllProducts(this.limit, this.offset)
      .pipe(
        switchMap(products => {
          this.products = products
          return this.route.queryParamMap
        })
      )
      .subscribe(params => {
        this.productId = params.get('product')
      })
  }
}
