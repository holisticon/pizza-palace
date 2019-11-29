import { createFeatureSelector, createSelector } from '@ngrx/store';
import { toTotalPrice } from '../order';
import { OrderPartialState, OrderState, ORDER_FEATURE_KEY } from './order.reducer';

export const getOrderState = createFeatureSelector<OrderPartialState, OrderState>(
    ORDER_FEATURE_KEY
);

export const selectOrderItems = createSelector(
    getOrderState,
    state => state.items
);

export const selectTotalPrice = createSelector(
    selectOrderItems,
    items => toTotalPrice(items)
);

export const selectQuantity = createSelector(
    selectOrderItems,
    items => items.length
);

export const selectIsCheckingOut = createSelector(
    getOrderState,
    state => state.isCheckingOut
);
