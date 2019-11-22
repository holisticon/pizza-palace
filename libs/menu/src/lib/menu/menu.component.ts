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
            name: 'Salami',
            price: 7.90,
            image: 'https://picsum.photos/60'
        },
        {
            name: 'Schinken',
            price: 7.90,
            image: 'https://picsum.photos/60'
        },
        {
            name: 'Brokkoli',
            price: 6.90,
            image: 'https://picsum.photos/60'
        },
    ])

    constructor(
        private store: Store<void>
    ) {}

    onAddToOrder(item: OrderItem) {
        this.store.dispatch(addToOrder({ item }));
    }

}
