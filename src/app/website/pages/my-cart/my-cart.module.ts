import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCartRoutingModule } from './my-cart-routing.module';
import { MyCartComponent } from './my-cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrimengModule } from 'src/app/primeNg/primeng/primeng.module';


@NgModule({
  declarations: [
    MyCartComponent
  ],
  imports: [
    CommonModule,
    MyCartRoutingModule,
    FontAwesomeModule,
    PrimengModule
  ]
})
export class MyCartModule { }
