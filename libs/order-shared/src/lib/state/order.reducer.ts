import { Action, createReducer } from '@ngrx/store';

export const ORDER_FEATURE_KEY = 'order';

export interface State  {
}

export interface OrderPartialState {
  readonly [ORDER_FEATURE_KEY]: State;
}

export const initialState: State = {};

const orderReducer = createReducer(
  initialState
);

export function reducer(state: State | undefined, action: Action) {
  return orderReducer(state, action);
}
