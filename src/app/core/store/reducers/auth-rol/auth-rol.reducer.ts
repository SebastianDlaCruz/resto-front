import { setAuthRol } from "@core/store/actions/auth-rol/auth-rol.action";
import { createReducer, on } from "@ngrx/store";

export const initialRolState = '';

export const authRolReducer = createReducer(
  initialRolState,
  on(setAuthRol, (state, { authRol }) => state = authRol)
)
