import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderListRoutingModule } from './order-list-routing.module';
import { OrderListComponent } from './order-list.component';
import { PrimengModule } from 'src/app/primeNg/primeng/primeng.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    OrderListRoutingModule,
    PrimengModule,
    FontAwesomeModule
  ]
})
export class OrderListModule { }
