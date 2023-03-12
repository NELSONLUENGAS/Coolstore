import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./pages/category/category.module').then(module => module.CategoryModule),
      },
      {
        path: 'product',
        loadChildren: () => import('./pages/product-detail/product-detail.module').then(module => module.ProductDetailModule)
      },
      {
        path: 'my-cart',
        loadChildren: () => import('./pages/my-cart/my-cart.module').then(module => module.MyCartModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(module => module.ProfileModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
