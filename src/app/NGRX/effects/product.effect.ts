import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { ProductsService } from "src/app/services/products.service";
import { AppState } from "../models/state";

@Injectable()
export class ProductEffects {


    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private productService: ProductsService
    ) { }

    chooseProduct$ = createEffect(() => this.actions$.pipe(
        ofType('[Product] Getting Product Chosen'),
        exhaustMap(({ id }) => this.productService.GetProduct(id)
            .pipe(
                map(product => {
                    return {
                        type: '[Product] Setting Product Chosen',
                        product
                    }
                }),
                catchError((error) => EMPTY)
            ))
    ));
}