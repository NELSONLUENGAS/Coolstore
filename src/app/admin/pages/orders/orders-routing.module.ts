import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: '',
        redirectTo: 'order-list',
        pathMatch: 'full'
      },
      {
        path: 'order-list',
        loadChildren: () => import('./pages/order-list/order-list.module').then(module => module.OrderListModule)
      },
      {
        path: 'order-detail',
        loadChildren: () => import('./pages/order-detail/order-detail.module').then(module => module.OrderDetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
