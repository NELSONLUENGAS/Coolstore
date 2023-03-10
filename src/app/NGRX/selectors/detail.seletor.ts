import { createSelector } from "@ngrx/store";
import { DetailState } from "../models/detail.model";
import { AppState } from "../models/state";

export const selectDeatilState = (state: AppState) => state.detail

export const selectOpenDetail = createSelector(
    selectDeatilState,
    (state: DetailState) => state.open
)