import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductFormRoutingModule } from './product-form-routing.module';
import { ProductFormComponent } from './product-form.component';
import { PrimengModule } from 'src/app/primeNg/primeng/primeng.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastyService } from 'src/app/services/toast/toasty.service';


@NgModule({
  declarations: [
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductFormRoutingModule,
    PrimengModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ToastyService
  ]

})
export class ProductFormModule { }
