import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, from } from 'rxjs';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { ICategory } from 'src/app/models/IProduct';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';
import { AppState } from '../models/state';

@Injectable()
export class CategoryEffects {


    constructor(
        private actions$: Actions,
        private categoryService: CategoryService,
        private store: Store<AppState>,
        private productService: ProductsService
    ) { }

    loadCategories$ = createEffect(() => this.actions$.pipe(
        ofType('[Categories] Loading Categories'),
        exhaustMap(() => this.categoryService.GetAll()
            .pipe(
                map(items => ({
                    type: '[Categories] Loaded Categories',
                    items,
                    loading: false
                })),
                catchError(() => EMPTY)
            ))
    ));

    loadProductsByCategory$ = createEffect(() => this.actions$.pipe(
        ofType('[Categories] Loading products by categories'),
        exhaustMap((action: { items: ICategory[] }) =>
            from(action.items)
        ),
        mergeMap((category) => this.productService.GetByCategory(category.id)
            .pipe(
                map(products => ({
                    type: '[Categories] Loaded products by categories',
                    item: {
                        category: category.name,
                        id: category.id,
                        items: products
                    }
                })),
                catchError(() => EMPTY)
            )
        )
    ))
}