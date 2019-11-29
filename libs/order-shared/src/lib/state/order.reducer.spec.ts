import { initialState, reducer, OrderState } from './order.reducer';
import { addToOrder, removeFromOrder, checkoutOrder, checkoutOrderSuccess } from './order.actions';
import { OrderItem } from '../order.model';
import { PizzaSize } from '@pizza-palace/pizza-shared';

describe('orderReducer', () => {

    const item: OrderItem = {
        pizza: {
            image: '',
            ingredients: '',
            name: 'Salami',
            price: 1.00
        },
        size: PizzaSize.M
    }

    describe('unknown action', () => {
        it('unknown action returns the previous state', () => {
            const action = {} as any;

            const result = reducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });

    describe('addToOrder', () => {
        it('adds the item to the order', () => {
            const action = addToOrder({ item });
            const state = reducer(initialState, action);

            expect(state.items.includes(item)).toBe(true);
        });
    });

    describe('removeFromOrder', () => {
        it('removes the item from the order', () => {
            const filledState: OrderState = {
                ...initialState,
                items: [item]
            };
            const action = removeFromOrder({ item });
            const state = reducer(filledState, action);

            expect(state.items.includes(item)).toBe(false);
            expect(state.items.length).toBe(0);
        });
    });

    describe('checkoutOrder', () => {
        it('sets isCheckingOut to true', () => {
            const action = checkoutOrder();
            const state = reducer(initialState, action);

            expect(initialState.isCheckingOut).toBe(false);
            expect(state.isCheckingOut).toBe(true);
        });
    });

    describe('checkoutOrderSuccess', () => {
        const action = checkoutOrderSuccess();

        it('sets isCheckingOut to false', () => {
            const filledState: OrderState = {
                ...initialState,
                isCheckingOut: true
            };
            const state = reducer(filledState, action);
            expect(state.isCheckingOut).toBe(false);
        });

        it('empties the item list', () => {
            const filledState: OrderState = {
                ...initialState,
                items: [item]
            };
            const state = reducer(filledState, action);
            expect(state.items.includes(item)).toBe(false);
            expect(state.items.length).toBe(0);
        });
    });
});
