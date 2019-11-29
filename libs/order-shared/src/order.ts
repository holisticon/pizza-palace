import { OrderItem } from './lib/order.model';

export function toTotalPrice(items: OrderItem[]) {
    return items.reduce(
        (total, item) => total + item.pizza.price,
        0
    );
}
