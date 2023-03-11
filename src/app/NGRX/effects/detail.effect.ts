import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

@Injectable()
export class DetailEffects {

    constructor(
        private actions$: Actions,
    ) { }

    openDetail$ = createEffect(() => this.actions$.pipe(
        ofType('[Detail] Open Detail')
    ), { dispatch: false });

    closeDetail$ = createEffect(() => this.actions$.pipe(
        ofType('[Detail] Close Detail')
    ), { dispatch: false });
}