import { Component } from '@angular/core';
import { OrderItem, OrderPartialState, selectOrderItems, removeFromOrder, selectTotalPrice } from '@pizza-palace/order-shared';
import { PizzaSize } from '@pizza-palace/pizza-shared';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
    selector: 'pp-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent {

    orderItems: Observable<OrderItem[]>;

    totalPrice: Observable<number>;

    constructor(
        private store: Store<OrderPartialState>
    ) {
        this.orderItems = this.store.select(selectOrderItems);
        this.totalPrice = this.store.select(selectTotalPrice);
    }

    onRemove(item: OrderItem) {
        this.store.dispatch(removeFromOrder({ item }));
    }
}
