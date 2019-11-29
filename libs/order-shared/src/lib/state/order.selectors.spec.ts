import { PizzaSize } from '@pizza-palace/pizza-shared';
import { OrderItem } from '../order.model';
import { initialState, ORDER_FEATURE_KEY, OrderPartialState, OrderState } from "./order.reducer";
import { getOrderState, selectIsCheckingOut, selectOrderItems, selectQuantity, selectTotalPrice } from './order.selectors';

describe('Order Selectors', () => {

    it('getOrderState returns the feature state', () => {
        const state: OrderPartialState = {
            [ORDER_FEATURE_KEY]: initialState
        };
        expect(getOrderState(state)).toBe(initialState);
    });

    it('selectOrderItems returns the list of items', () => {
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

    it('selectTotalPrice returns the total price sum', () => {
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

    it('selectQuantity returns the array length', () => {
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

    it('selectIsCheckingOut returns isCheckingOut', () => {
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
