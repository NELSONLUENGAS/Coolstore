import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { IProduct } from 'src/app/models/IProduct';
import { ProductsService } from 'src/app/services/products.service';
import SwiperCore, {EffectCards, Thumbs, FreeMode } from 'swiper';

SwiperCore.use([FreeMode, Thumbs, EffectCards]);

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  thumbsSwiper: any;

  id: string | null = ''
  product : IProduct = {
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

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap( params => {
        this.id = params.get('id')
        return this.id ?  
          this.ProductService.GetProduct(this.id) 
          : []
      })
    )
    .subscribe( data => {
     this.product = data
    })
  }

}
