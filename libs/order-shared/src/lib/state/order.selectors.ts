import { createFeatureSelector } from '@ngrx/store';
import { OrderPartialState, ORDER_FEATURE_KEY, State } from './order.reducer';

export const getOrderState = createFeatureSelector<OrderPartialState, State>(
  ORDER_FEATURE_KEY
);
