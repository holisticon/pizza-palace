import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ORDER_FEATURE_KEY, OrderPartialState, OrderState } from './order.reducer';
import { toTotalPrice } from '../../order';

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
