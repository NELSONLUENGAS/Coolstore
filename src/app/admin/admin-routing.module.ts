import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(module => module.DashboardModule),

      },
      {
        path: 'products',
        loadChildren: () => import('./pages/products/products.module').then(module => module.ProductsModule),

      },
      {
        path: 'orders',
        loadChildren: () => import('./pages/orders/orders.module').then(module => module.OrdersModule),

      },
      {
        path: 'statistic',
        loadChildren: () => import('./pages/statistic/statistic.module').then(module => module.StatisticModule),

      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(module => module.ProfileModule),

      },
      {
        path: 'users',
        loadChildren: () => import('./pages/users/users.module').then(module => module.UsersModule),

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
