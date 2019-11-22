import { Action, createReducer, on } from '@ngrx/store';
import { OrderItem } from '../order.model';
import { addToOrder, removeFromOrder, checkoutOrder, checkoutOrderSuccess } from './order.actions';

export const ORDER_FEATURE_KEY = 'order';

export interface OrderState  {
    isCheckingOut: boolean,
    items: OrderItem[]
}

export interface OrderPartialState {
    readonly [ORDER_FEATURE_KEY]: OrderState;
}

export const initialState: OrderState = {
    isCheckingOut: false,
    items: []
};

const orderReducer = createReducer(
  initialState,
  on(addToOrder, (state, { item }) => ({
      ...state,
      items: [...state.items, item ]
  })),
  on(removeFromOrder, (state, { item }) => ({
      ...state,
      items: state.items.filter(it => it !== item),

  })),
  on(checkoutOrder, (state) => ({
      ...state,
      isCheckingOut: true
  })),
  on(checkoutOrderSuccess, (state) => ({
      ...state,
      isCheckingOut: false,
      items: []
  }))
);

export function reducer(state: OrderState | undefined, action: Action) {
  return orderReducer(state, action);
}
