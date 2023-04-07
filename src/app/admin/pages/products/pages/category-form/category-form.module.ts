import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryFormRoutingModule } from './category-form-routing.module';
import { CategoryFormComponent } from './category-form.component';
import { PrimengModule } from 'src/app/primeNg/primeng/primeng.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastyService } from 'src/app/services/toast/toasty.service';


@NgModule({
  declarations: [
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    CategoryFormRoutingModule,
    PrimengModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ToastyService
  ]
})
export class CategoryFormModule { }
