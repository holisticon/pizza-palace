import { Component } from '@angular/core';
import { OrderItem } from '../order/order.model';
import { pizzas } from '../pizza/pizza.data';
import { Pizza, PizzaSize } from '../pizza/pizza.model';

@Component({
    selector: 'pp-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    pizzaSizes = PizzaSize;

    pizzas: Pizza[] = pizzas;

    onAddToOrder(item: OrderItem) {
        console.log('Add to Order', item);
    }

}
