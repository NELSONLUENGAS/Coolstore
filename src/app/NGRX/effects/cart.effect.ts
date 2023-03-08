import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { AppState } from '../models/state';
import { selectCart } from '../selectors/cart.selector';

@Injectable()
export class CartEffects {

    constructor(
        private actions$: Actions,
        private store: Store<AppState>
    ) { }

    openCart$ = createEffect(() => this.actions$.pipe(
        ofType('[Cart] Open Cart'),
        map(() => ({
            type: '[Detail] Close Detail',
            open: false
        }))
    ));

    addToCart$ = createEffect(() => this.actions$.pipe(
        ofType('[Cart] Add item to Cart'),
        exhaustMap(() =>
            this.store.select(selectCart)
                .pipe(
                    map((cart) => {
                        localStorage.setItem('cart', JSON.stringify(cart))
                    }),
                    catchError(() => EMPTY)
                )
        )
    ), { dispatch: false });

    setCart$ = createEffect(() => this.actions$.pipe(
        ofType('[Cart] Getting Cart of CookieStorage'),
        map(() => {
            const cart = localStorage.getItem('cart')
            if (cart) {
                return {
                    type: '[Cart] Setting Cart with CookieStorage',
                    items: JSON.parse(cart)
                }
            } else {
                return {
                    type: '[Cart] Setting Cart with CookieStorage',
                    items: []
                }
            }
        })
    ))

    setItemsQuantity$ = createEffect(() => this.actions$.pipe(
        ofType('[Cart] Getting quantity of Items'),
        exhaustMap(() =>
            this.store.select(selectCart)
                .pipe(
                    map((cart) => {

                        const quantity = cart.reduce((sum, item) => {
                            return sum + item.quantity
                        }, 0)

                        return {
                            type: '[Cart] Setting quantity of Items',
                            quantity
                        }
                    }),
                    catchError(() => EMPTY)
                )
        )
    ))
}