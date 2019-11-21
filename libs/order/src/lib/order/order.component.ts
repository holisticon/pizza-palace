import { Component } from '@angular/core';
import { OrderItem } from '@pizza-palace/order-shared';
import { PizzaSize } from '@pizza-palace/pizza-shared';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'pp-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent {

    orderItems: Observable<OrderItem[]> = of([
        {
            pizza: {
                name: 'Salami',
                price: 7.90,
                image: 'https://picsum.photos/50/50?1'
            },
            size: PizzaSize.S

        },
        {

            pizza: {
                name: 'Schinken',
                price: 7.90,
                image: 'https://picsum.photos/50/50?2'
            },
            size: PizzaSize.L
        }
    ])

}
