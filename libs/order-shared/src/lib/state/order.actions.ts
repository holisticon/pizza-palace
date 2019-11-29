import { createAction, props } from '@ngrx/store';
import { OrderItem } from '../order.model';

export const addToOrder = createAction(
    '[Order] Add to order',
    props<{ item: OrderItem }>()
);
