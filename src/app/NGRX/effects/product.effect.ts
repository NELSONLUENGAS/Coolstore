import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { ProductsService } from "src/app/services/products.service";
import { AppState } from "../models/state";
import { ALL_OBTAINED, CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL, GET_PRODUCT, PRODUCT_OBTAINED, UPDATE_PRODUCT } from "../actions/product.action";

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

    loadingProducts$ = createEffect(() => this.actions$.pipe(
        ofType(GET_ALL),
        exhaustMap(() => this.productService.GetAllProducts()
            .pipe(
                map((allProducts) => {
                    return {
                        type: ALL_OBTAINED,
                        loading: false,
                        allProducts
                    }
                }),
                catchError((error) => EMPTY)
            ))
    ))

    get$ = createEffect(() => this.actions$.pipe(
        ofType(GET_PRODUCT),
        exhaustMap(({ id }) => this.productService.GetProduct(id)
            .pipe(
                map((product) => ({
                    type: PRODUCT_OBTAINED,
                    data: product
                }))
            ))
    ))

    create$ = createEffect(() => this.actions$.pipe(
        ofType(CREATE_PRODUCT),
        exhaustMap(({ data }) => this.productService.Create(data)
            .pipe(
                map(() => ({
                    type: GET_ALL
                })),
                catchError(() => EMPTY)
            )
        )
    ))

    update$ = createEffect(() => this.actions$.pipe(
        ofType(UPDATE_PRODUCT),
        exhaustMap(({ data, id }) => this.productService.Update(id, data)
            .pipe(
                map(() => ({
                    type: GET_ALL
                })),
                catchError(() => EMPTY)
            )
        )
    ))

    delete$ = createEffect(() => this.actions$.pipe(
        ofType(DELETE_PRODUCT),
        exhaustMap(({ id }) => this.productService.Delete(id)
            .pipe(
                map(() => ({
                    type: GET_ALL
                })),
                catchError(() => EMPTY)
            )
        )
    ))
}