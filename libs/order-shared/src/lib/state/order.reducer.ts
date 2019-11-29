import { Action, createReducer, on } from '@ngrx/store';
import { OrderItem } from '../order.model';
import { addToOrder, checkoutOrderSuccess, removeFromOrder } from './order.actions';

export const ORDER_FEATURE_KEY = 'order';

export interface OrderState {
    items: OrderItem[]
}

export interface OrderPartialState {
    readonly [ORDER_FEATURE_KEY]: OrderState;
}

export const initialState: OrderState = {
    items: []
};

const orderReducer = createReducer(
    initialState,
    on(addToOrder, (state, { item }) => ({
        ...state,
        items: [...state.items, item]
    })),
    on(removeFromOrder, (state, { item }) => ({
        ...state,
        items: state.items.filter(it => it !== item),

    })),
    on(checkoutOrderSuccess, (state) => ({
        ...state,
        items: []
    }))
);

export function reducer(state: OrderState | undefined, action: Action) {
    return orderReducer(state, action);
}
