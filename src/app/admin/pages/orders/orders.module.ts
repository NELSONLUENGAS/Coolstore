import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrimengModule } from 'src/app/primeNg/primeng/primeng.module';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FontAwesomeModule,
    PrimengModule
  ]
})
export class OrdersModule { }
