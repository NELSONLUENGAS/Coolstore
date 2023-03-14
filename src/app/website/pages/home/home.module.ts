import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';
import { HomeComponent } from './home.component';
import { PrimengModule } from 'src/app/primeNg/primeng/primeng.module';


@NgModule({
  declarations: [
    BannerComponent,
    CategoriesComponent,
    CategoryComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    SwiperModule,
    PrimengModule
  ]
})
export class HomeModule { }
