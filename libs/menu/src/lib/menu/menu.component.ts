import { Component } from '@angular/core';
import { Pizza } from '@pizza-palace/pizza-shared';
import { Observable, of } from 'rxjs';
import { OrderItem, addToOrder } from '@pizza-palace/order-shared';
import { Store } from '@ngrx/store';

@Component({
    selector: 'pp-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    pizzas: Observable<Pizza[]> = of([
        {
            name: 'Pizza Olive',
            price: 7.90,
            image: '/assets/pizza-olive.jpg',
            ingredients: 'Olives, Baconb, Cheese, Tomato sauce'
        },
        {
            name: 'Pizza Aspargus',
            price: 7.90,
            image: '/assets/pizza-aspargus.jpg',
            ingredients: 'Aspargus, Bacon, Onions, Corn, Cheese, Tomato sauce'
        },
        {
            name: 'Pizza BBQ',
            price: 6.90,
            image: '/assets/pizza-barbecue.jpg',
            ingredients: 'Barbecue sauce, Sauce Hollandaise, Cheese, Tomato sauce'
        },
    ])

    constructor(
        private store: Store<void>
    ) {}

    onAddToOrder(item: OrderItem) {
        this.store.dispatch(addToOrder({ item }));
    }

}
