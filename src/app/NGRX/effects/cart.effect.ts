import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

@Injectable()
export class CartEffects {


    constructor(
        private actions$: Actions,
    ) { }

    openCart$ = createEffect(() => this.actions$.pipe(
        ofType('[Cart] Open Cart'),
        map(() => ({
            type: '[Detail] Close Detail',
            open: false
        }))
    ));
}