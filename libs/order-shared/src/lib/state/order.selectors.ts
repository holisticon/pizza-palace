import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderPartialState, ORDER_FEATURE_KEY, OrderState } from './order.reducer';

export const getOrderState = createFeatureSelector<OrderPartialState, OrderState>(
  ORDER_FEATURE_KEY
);

export const selectOrderItems = createSelector(
    getOrderState,
    state => state.items
)

export const selectTotalPrice = createSelector(
    selectOrderItems,
    items => items.reduce((total, item) => total + item.pizza.price, 0)
)

export const selectQuantity = createSelector(
    selectOrderItems,
    items => items.length
)

export const selectIsCheckingOut = createSelector(
    getOrderState,
    state => state.isCheckingOut
)
