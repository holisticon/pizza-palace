import { Component } from '@angular/core';
import { pizzas } from '../pizza/pizza.data';
import { PizzaSize } from '../pizza/pizza.model';
import { OrderItem } from './order.model';

@Component({
    selector: 'pp-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent {

    orderItems: OrderItem[] = [{
        pizza: pizzas[1],
        size: PizzaSize.M
    }];

    totalPrice = this.orderItems.reduce(
        (sum, item) => sum + item.pizza.price,
        0
    );

    onRemove(item: OrderItem) {
        console.log('Remove Item', item);
    }

    onCheckout() {
        console.log('Checkout Order');
    }
}
