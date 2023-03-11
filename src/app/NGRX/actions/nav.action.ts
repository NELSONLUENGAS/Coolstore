import { createAction, props } from "@ngrx/store";

export const openSidebar = createAction(
    '[Nav] opening sidebar',
    props<{ open: boolean }>()
)