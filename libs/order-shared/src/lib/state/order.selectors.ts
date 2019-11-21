import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderPartialState, ORDER_FEATURE_KEY, OrderState } from './order.reducer';

export const getOrderState = createFeatureSelector<OrderPartialState, OrderState>(
  ORDER_FEATURE_KEY
);

export const selectOrderItems = createSelector(
    getOrderState,
    state => state.items
)
