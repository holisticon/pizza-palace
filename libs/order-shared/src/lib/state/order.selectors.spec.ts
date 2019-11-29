import { PizzaSize } from '@pizza-palace/pizza-shared';
import { OrderItem } from '../order.model';
import { initialState, OrderPartialState, OrderState, ORDER_FEATURE_KEY } from "./order.reducer";
import { getOrderState, selectOrderItems } from './order.selectors';

describe('orderSelectors', () => {
    const items: OrderItem[] = [
        {
            pizza: {
                image: '',
                ingredients: '',
                name: 'Salami',
                price: 1.00
            },
            size: PizzaSize.M
        },
        {
            pizza: {
                image: '',
                ingredients: '',
                name: 'Schinken',
                price: 2.00
            },
            size: PizzaSize.L
        },
    ];

    describe('getOrderState', () => {
        it('returns the feature state', () => {
            const state: OrderPartialState = {
                [ORDER_FEATURE_KEY]: initialState
            };
            expect(getOrderState(state)).toBe(initialState);
        });
    });

    describe('selectOrderItems', () => {
        it('returns the list of order items', () => {
            const state: Partial<OrderState> = {
                items
            };
            expect(selectOrderItems.projector(state)).toBe(items);
        });
    });
});
