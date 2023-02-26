import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { IProduct } from 'src/app/models/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId: string | null = null
  productId: string | null = null
  limit = 10
  offset = 0
  products: Array<IProduct> = []

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductsService
  ){}

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap( params => {
        this.categoryId = params.get('id')
        return this.route.queryParamMap
      }),
      switchMap( params => {
        this.productId = params.get('product')
        return this.categoryId ?  
          this.ProductService.GetByCategory(this.categoryId, this.limit, this.offset) 
          : []
      }),
    )
    .subscribe( data => {
     this.products = data
    })
  }
}
