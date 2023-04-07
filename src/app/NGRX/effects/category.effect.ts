import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, from } from 'rxjs';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';
import { AppState } from '../models/state';
import { CATEGORIES_LOADED, CATEGORY_OBTAINED, CREATE_CATEGORY, DELETE_CATEGORY, GET_CATEGORY, LOAD_CATEGORIES, UPDATE_CATEGORY } from '../actions/category.action';
import { ICategory } from 'src/app/models/ICategory';

@Injectable()
export class CategoryEffects {


    constructor(
        private actions$: Actions,
        private categoryService: CategoryService,
        private store: Store<AppState>,
        private productService: ProductsService,
    ) { }

    loadCategories$ = createEffect(() => this.actions$.pipe(
        ofType(LOAD_CATEGORIES),
        exhaustMap(() => this.categoryService.GetAll()
            .pipe(
                map(items => ({
                    type: CATEGORIES_LOADED,
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
                        items: products,
                        loading: false
                    },
                })),
                catchError(() => EMPTY)
            )
        )
    ))

    get$ = createEffect(() => this.actions$.pipe(
        ofType(GET_CATEGORY),
        exhaustMap(({ id }) => this.categoryService.get(id)
            .pipe(
                map((category) => ({
                    type: CATEGORY_OBTAINED,
                    data: category
                }))
            ))
    ))

    create$ = createEffect(() => this.actions$.pipe(
        ofType(CREATE_CATEGORY),
        exhaustMap(({ data }) => this.categoryService.create(data)
            .pipe(
                map(() => ({
                    type: LOAD_CATEGORIES
                })),
                catchError(() => EMPTY)
            )
        )
    ))

    update$ = createEffect(() => this.actions$.pipe(
        ofType(UPDATE_CATEGORY),
        exhaustMap(({ data, id }) => this.categoryService.update(id, data)
            .pipe(
                map(() => ({
                    type: LOAD_CATEGORIES
                })),
                catchError(() => EMPTY)
            )
        )
    ))

    delete$ = createEffect(() => this.actions$.pipe(
        ofType(DELETE_CATEGORY),
        exhaustMap(({ id }) => this.categoryService.delete(id)
            .pipe(
                map(() => ({
                    type: LOAD_CATEGORIES
                })),
                catchError(() => EMPTY)
            )
        )
    ))
}