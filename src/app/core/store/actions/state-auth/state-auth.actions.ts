import { createAction, props } from "@ngrx/store";

export const setStateAuth = createAction('[StateAuth Component] setStateAuth',
  props<{ stateAuth: boolean }>()
)
