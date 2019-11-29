import { PizzaSize } from '@pizza-palace/pizza-shared';
import { OrderItem } from '../order.model';
import { addToOrder } from './order.actions';
import { initialState, reducer } from './order.reducer';

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
});
