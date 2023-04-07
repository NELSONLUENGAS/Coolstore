import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryListRoutingModule } from './category-list-routing.module';
import { CategoryListComponent } from './category-list.component';
import { PrimengModule } from 'src/app/primeNg/primeng/primeng.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    CategoryListRoutingModule,
    PrimengModule,
    FontAwesomeModule
  ]
})
export class CategoryListModule { }
