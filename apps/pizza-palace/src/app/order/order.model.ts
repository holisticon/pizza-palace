import { Pizza, PizzaSize } from '../pizza/pizza.model';

export interface OrderItem {
    pizza: Pizza;
    size: PizzaSize;
}
