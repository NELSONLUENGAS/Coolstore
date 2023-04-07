import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        redirectTo: 'product-list',
        pathMatch: 'full'
      },
      {
        path: 'product-list',
        loadChildren: () => import('./pages/product-list/product-list.module').then(module => module.ProductListModule),
      },
      {
        path: 'product-form',
        loadChildren: () => import('./pages/product-add/product-add.module').then(module => module.ProductAddModule)
      },
      {
        path: 'product-form',
        loadChildren: () => import('./pages/product-form/product-form.module').then(module => module.ProductFormModule)
      },
      {
        path: 'product-detail',
        loadChildren: () => import('./pages/product-detail/product-detail.module').then(module => module.ProductDetailModule)
      },
      {
        path: 'category-list',
        loadChildren: () => import('./pages/category-list/category-list.module').then(module => module.CategoryListModule),
      },
      {
        path: 'category-form',
        loadChildren: () => import('./pages/category-add/category-add.module').then(module => module.CategoryAddModule),
      },
      {
        path: 'category-form',
        loadChildren: () => import('./pages/category-form/category-form.module').then(module => module.CategoryFormModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
