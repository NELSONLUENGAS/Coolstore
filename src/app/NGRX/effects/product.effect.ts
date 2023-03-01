import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category.service';

@Injectable()
export class CategoryEffects {


    constructor(
        private actions$: Actions,
        private categoryService: CategoryService
    ) { }

    loadCategories$ = createEffect(() => this.actions$.pipe(
        ofType('[Products] Loading products'),
        exhaustMap(() => this.categoryService.GetAll()
            .pipe(
                map(items => ({
                    type: '[Products] Loaded products',
                    items,
                    loading: false
                })),
                catchError(() => EMPTY)
            ))
    ));
}