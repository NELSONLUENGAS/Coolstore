import { createAction, props } from "@ngrx/store";

export const openDetail = createAction(
    '[Detail] Open Detail',
    props<{ open: boolean }>()
)
export const closeDetail = createAction(
    '[Detail] Close Detail',
    props<{ open: boolean }>()
)