import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';

import { HeaderComponent } from './components/header/header.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '../shared/shared.module';
import { QuicklinkModule } from 'ngx-quicklink';
import { CartFacadeService } from '../NGRX/facades/cart.facade.service';
import { PrimengModule } from '../primeNg/primeng/primeng.module';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FontAwesomeModule,
    SwiperModule,
    SharedModule,
    QuicklinkModule,
    PrimengModule,
  ],
})
export class WebsiteModule { }
