import { setStateAuth } from "@core/store/actions/state-auth/state-auth.actions";
import { createReducer, on } from "@ngrx/store";

export const initialState = false;

export const stateAuthReducer = createReducer(
  initialState,
  on(setStateAuth, (state, { stateAuth }) => state = stateAuth)
)
