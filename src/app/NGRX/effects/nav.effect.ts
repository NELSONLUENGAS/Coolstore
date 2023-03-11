import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";


@Injectable()
export class NavEffects {

    constructor(
        private actions$: Actions
    ) { }

    openSidebar$ = createEffect(() => this.actions$.pipe(
        ofType('[Nav] opening sidebar')
    ), { dispatch: false });
}