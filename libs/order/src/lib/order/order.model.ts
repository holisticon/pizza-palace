import { Pizza, PizzaSize } from '@pizza-palace/pizza-shared';

export interface OrderItem {
    pizza: Pizza;
    size: PizzaSize;
}
