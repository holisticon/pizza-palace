import { PizzaSize } from '@pizza-palace/pizza-shared';
import { OrderItem } from '../order.model';
import { initialState, ORDER_FEATURE_KEY, OrderPartialState, OrderState } from "./order.reducer";
import { getOrderState, selectIsCheckingOut, selectOrderItems, selectQuantity, selectTotalPrice } from './order.selectors';

describe('orderSelectors', () => {

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
            const items: OrderItem[] = [
                {
                    pizza: {
                        image: '',
                        ingredients: '',
                        name: 'Salami',
                        price: 1.00
                    },
                    size: PizzaSize.M
                }
            ];

            const state: Partial<OrderState> = {
                items
            };
            expect(selectOrderItems.projector(state)).toBe(items);
        });
    });

    describe('selectTotalPrice', () => {
        it('returns the total price', () => {
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

            expect(selectTotalPrice.projector(items)).toBe(3.00);
        });
    });

    describe('selectQuantity', () => {
        it('returns the number of order items', () => {
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

            expect(selectQuantity.projector(items)).toBe(items.length);
        });
    });

    describe('selectIsCheckingOut', () => {
        it('returns whether the order is currently being checked out', () => {
            const trueState: Partial<OrderState> = {
                isCheckingOut: true
            };

            expect(selectIsCheckingOut.projector(trueState)).toBe(true);

            const falseState: Partial<OrderState> = {
                isCheckingOut: false
            };

            expect(selectIsCheckingOut.projector(falseState)).toBe(false);
        });
    });
});
