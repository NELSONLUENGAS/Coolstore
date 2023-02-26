import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HighlightDirective } from '../website/directives/highlight.directive';
import { SwiperModule } from 'swiper/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ImgComponent,
    ProductComponent,
    ProductListComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SwiperModule,
  ],
  exports: [
    ImgComponent,
    ProductComponent,
    ProductListComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
  ]
})
export class SharedModule { }
