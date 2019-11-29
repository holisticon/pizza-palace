import { Component } from '@angular/core';
import { OrderItem } from '@pizza-palace/order';
import { Pizza, pizzas, PizzaSize } from '@pizza-palace/pizza-shared';

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
