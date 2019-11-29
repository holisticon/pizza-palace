import { PizzaSize } from '@pizza-palace/pizza-shared';
import { OrderItem } from '../order.model';
import { addToOrder, checkoutOrderSuccess, removeFromOrder } from './order.actions';
import { initialState, OrderState, reducer } from './order.reducer';

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

    describe('checkoutOrderSuccess', () => {
        const action = checkoutOrderSuccess();

        it('sets isCheckingOut to false', () => {
            const filledState: OrderState = {
                ...initialState,
            };
            const state = reducer(filledState, action);
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
