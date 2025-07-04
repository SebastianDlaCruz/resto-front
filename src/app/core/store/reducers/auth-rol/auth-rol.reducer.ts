import { setAuthRol } from "@core/store/actions/auth-rol/auth-rol.action";
import { createReducer, on } from "@ngrx/store";

/**
 * Estado inicial del rol del auth global
 */
export const initialRolState = '';

export const authRolReducer = createReducer(
  initialRolState,
  on(setAuthRol, (state, { authRol }) => state = authRol)
)
