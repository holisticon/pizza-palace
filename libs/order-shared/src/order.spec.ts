import { OrderItem } from './lib/order.model';
import { toTotalPrice } from './order';
import { PizzaSize } from '@pizza-palace/pizza-shared';

describe('order', () => {
    describe('toTotalPrice', () => {
        it('returns 0 if no items are given', () => {
            expect(toTotalPrice([])).toBe(0);
        });

        it('returns the total price for the given order items', () => {
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

            expect(toTotalPrice(items)).toBe(3.00);
        });
    });
});
