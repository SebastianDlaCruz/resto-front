import { createAction, props } from "@ngrx/store";

export const setAuthRol = createAction('[AuthRol Component] setAuthRol',
  props<{ authRol: string }>()
)
